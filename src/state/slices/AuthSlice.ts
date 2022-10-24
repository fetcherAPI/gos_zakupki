import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { stat } from "fs";
import { AuthResponce } from "../../models/response/AuthResponse";
import { UserData } from "../../models/types";

export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async ({ username, password }: UserData, { rejectWithValue }) => {
    try {
      const responcse = await axios.post(
        "http://10.100.4.164:8087/authenticate",
        {
          username,
          password,
        }
      );
      return responcse;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error);
    }
  }
);

export interface IAouthState {
  isAuth: boolean;
  status: string | null;
  error: string | unknown | null;
  user: object | null;
}

const initialState: IAouthState = {
  isAuth: true,
  status: null,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.status = "resolve";
        state.user = action.payload;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { setIsAuth, setError } = authSlice.actions;

export default authSlice.reducer;
