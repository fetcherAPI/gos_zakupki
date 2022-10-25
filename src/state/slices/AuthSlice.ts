import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import USER_ROLES from "../../models/enums/userRoles";
import { UserData } from "../../models/types";
import AuthService from "../../services/AuthService";
import { checkUserRole } from "../../utils/checkUserRole";

export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async ({ username, password }: UserData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://10.100.4.164:8087/authenticate",
        {
          username,
          password,
        }
      );
      checkUserRole(response.data);
      return response.data;
    } catch (error: any) {
      console.log("error", error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.chekAuth();
      checkUserRole(response.data);
    } catch (error) {
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
  isAuth: false,
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
        if (
          USER_ROLES.PROCURING_ENTITY === action.payload.role ||
          USER_ROLES.PROCURING_ENTITY === action.payload.role ||
          USER_ROLES.PROCURING_ENTITY === action.payload.role
        ) {
          state.isAuth = true;
        }
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
