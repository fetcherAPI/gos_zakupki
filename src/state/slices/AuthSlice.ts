import { createSlice } from "@reduxjs/toolkit";
import { RefreshResponce } from "../../models/response/AuthResponse";

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
  isAuth: boolean;
  userStatus: UserStatus;
  isLoading: boolean;
  error: any;
  userRole: string;
}

const initialState: IAouthState = {
  userStatus: {
    status: "unknown",
  },
  isAuth: false,
  isLoading: false,
  error: null,
  userRole: "",
};

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
});

export const { setIsAuth, setError, setUserRole, setIsLoading, setUserData } =
  authSlice.actions;

export default authSlice.reducer;
