import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "./index";
import { RootState } from "../state/store";
import { tokenAvailability } from "../utils/tokenAvailability";

const AppRouter = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  return isAuth || tokenAvailability() ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={<route.component />}
          path={route.path}
          key={route.path}
        />
      ))}
      <Route path='*' element={<Navigate to={RouteNames.SIDEBAR} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={<route.component />}
          path={route.path}
          key={route.path}
        />
      ))}

      <Route path='*' element={<Navigate to={RouteNames.LOGIN} replace />} />
    </Routes>
  );
};

export default React.memo(AppRouter);
