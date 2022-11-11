import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CheckRefreshTokenService from "../../services/AuthService";
import { isUserRoleCorrect } from "../../utils/checkUserRole";
import { IAuthState } from "./types";

const initialState: IAuthState = {
  userStatus: {
    status: "logged-in",
  },
  responseStatus: "resolve",
  isAuth: false,
  isLoading: false,
  error: null,
  userRole: "",
  user: {
    token:
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZXZfcHJvY3VyaW5nX2VudGl0eSIsImlhdCI6MTY2NzI3Njg5OCwiZXhwIjoxNjY3ODgxNjk4fQ.VgBRRQh79IHXczyDBTDechRTAY7TvEoWxg72xORJLHhmkSPyhhFuvemUqiJPrAKrkqQ4VVFgKw2f6hTLcWxQuA",
    type: "Bearer",
    username: "dev_procuring_entity",
    role: "procuring_entity",
    currentTime: "2022-11-01T04:28:18.331177313",
    expiryDate: "2022-11-08T04:28:18.275",
  },
};

export const checkRefreshTokenAsync = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await CheckRefreshTokenService.checkAuth();
      if (isUserRoleCorrect(response.data.role)) {
        window.localStorage.setItem("authentication", response.data.token);
        return response.data;
      }
      throw new Error("роль не совпадает");
    } catch (error: any) {
      if (error?.responseStatus) {
        window.localStorage.removeItem("authentication");
      }
      return rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setUserData(state, action) {
      state.userRole = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setUserRole(state, action) {
      state.userRole = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkRefreshTokenAsync.pending, (state) => {
        state.responseStatus = "pending";
        state.error = null;
      })
      .addCase(checkRefreshTokenAsync.fulfilled, (state, action) => {
        state.responseStatus = "resolve";
        state.user = action.payload;
        state.userStatus = {
          status: "logged-in",
          response: action.payload,
        };
        state.isAuth = true;
        state.userRole = action.payload.role;
      })
      .addCase(checkRefreshTokenAsync.rejected, (state, action: any) => {
        state.responseStatus = "rejected";
        if (action.payload.responseStatus) {
          state.userStatus = {
            status: "logged-out",
          };
        } else {
          state.userStatus = {
            status: "server-unreachable",
          };
        }
        state.isAuth = false;
        state.error = action.payload.message;
      });
  },
});

export const { setIsAuth, setError, setIsLoading, setUserData } =
  authSlice.actions;

export default authSlice.reducer;
