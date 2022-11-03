import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import organizationInfoReducer from "./slices/OraganizationInfoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    organizationInfo: organizationInfoReducer
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
