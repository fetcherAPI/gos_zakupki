import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RefreshResponce } from "../../models/response/RefreshResponse";
import CheckRefershTokenService from "../../services/AuthService";
import { isUserRoleCorrect } from "../../utils/checkUserRole";

interface UserUnknownState {
  status: "unknown";
}

interface ServerUnreachable {
  status: "server-unreachable";
}

interface LoggedOut {
  status: "logged-out";
}

interface LoggedIn {
  status: "logged-in";
  response?: RefreshResponce;
}

export type UserStatus =
  | UserUnknownState
  | ServerUnreachable
  | LoggedOut
  | LoggedIn;

export interface IAouthState {
  userStatus: UserStatus;
  status: string;
  isAuth: boolean;
  isLoading: boolean;
  error: any;
  userRole: string;
  user: RefreshResponce;
}

const initialState: IAouthState = {
  userStatus: {
    status: "logged-in",
  },
  status: "",
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
      const response = await CheckRefershTokenService.chekAuth();
      if (isUserRoleCorrect(response.data.role)) {
        window.localStorage.setItem("authentication", response.data.token);
        return response.data;
      }
      throw new Error("роль не совпадает");
    } catch (error) {
      window.localStorage.removeItem("authentication");
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
        state.status = "loading";
        state.error = null;
      })
      .addCase(checkRefreshTokenAsync.fulfilled, (state, action) => {
        state.status = "resolve";
        state.user = action.payload;
        state.userStatus = {
          status: "logged-in",
          response: action.payload,
        };
        state.isAuth = true;
        state.userRole = action.payload.role;
      })
      .addCase(checkRefreshTokenAsync.rejected, (state, action: any) => {
        state.status = "rejected";
        if (action.payload.status) {
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

export const { setIsAuth, setError, setUserRole, setIsLoading, setUserData } =
  authSlice.actions;

export default authSlice.reducer;
