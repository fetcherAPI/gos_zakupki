import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import organizationInfoReducer from "./slices/OraganizationInfoSlice";
import createOrderMainReducer from "./slices/CreateOrderMainSlice";
import QualificationReducer from "./slices/Qualification";
import SpecialRequirmentsReducer from "./slices/SpecialRequirments";
import contractConditionsReducer from "./slices/ContarctConditionsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    organizationInfo: organizationInfoReducer,
    createOrderMain: createOrderMainReducer,
    Qualification: QualificationReducer,
    SpecialRequirments: SpecialRequirmentsReducer,
    contractConditions: contractConditionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
