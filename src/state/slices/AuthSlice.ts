import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RefreshResponce } from "../../models/response/AuthResponse";
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
  response: RefreshResponce;
}

type UserStatus = UserUnknownState | ServerUnreachable | LoggedOut | LoggedIn;

export interface IAouthState {
  status: string;
  isAuth: boolean;
  userStatus: UserStatus;
  isLoading: boolean;
  error: any;
  userRole: string;
  user: RefreshResponce | null;
}

const initialState: IAouthState = {
  userStatus: {
    status: "unknown",
  },
  status: "",
  isAuth: false,
  isLoading: false,
  error: null,
  userRole: "",
  user: null,
};

export const checkRefreshTokenAsync = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await CheckRefershTokenService.chekAuth();
      if (isUserRoleCorrect(response.data.role)) {
        return response.data;
      }

      throw new Error("роль не совпадает");
    } catch (error) {
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
      })
      .addCase(checkRefreshTokenAsync.rejected, (state, action: any) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { setIsAuth, setError, setUserRole, setIsLoading, setUserData } =
  authSlice.actions;

export default authSlice.reducer;
