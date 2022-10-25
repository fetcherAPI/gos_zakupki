import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import USER_ROLES from "../../models/enums/userRoles";
import { UserData } from "../../models/types";
import AuthService from "../../services/AuthService";
import { checkUserRole } from "../../utils/checkUserRole";

export interface IAouthState {
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
  userData: object | null;
  message: string;
}

const initialState: IAouthState = {
  isAuth: false,
  isLoading: false,
  error: null,
  userData: null,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { setIsAuth, setError, setMessage, setIsLoading, setUserData } =
  authSlice.actions;

export default authSlice.reducer;
