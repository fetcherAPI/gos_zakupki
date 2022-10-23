import { createSlice } from "@reduxjs/toolkit";

export interface IAouthState {
  isAuth: boolean;
}

const initialState: IAouthState = {
  isAuth: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = authSlice.actions;

export default authSlice.reducer;
