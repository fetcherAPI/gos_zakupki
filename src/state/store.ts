import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";

export const ore = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
