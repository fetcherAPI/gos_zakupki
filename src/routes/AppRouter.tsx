import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "./index";
import { RootState } from "../state/store";
import { tokenAvailability } from "../utils/tokenAvailability";
import { isUserRoleCorrect } from "../utils/checkUserRole";

export const AppRouter = () => {
  const { isAuth, userRole } = useSelector((state: RootState) => state.auth);

  return isAuth ||
    (tokenAvailability() && isUserRoleCorrect("procuring_entity")) ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={<route.component />}
          path={route.path}
          key={route.path}
        />
      ))}
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
      <Route path='*' element={<Navigate to={RouteNames.MAIN} replace />} />
    </Routes>
  );
};
