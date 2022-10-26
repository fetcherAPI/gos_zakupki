import AuthService from "../../services/AuthService";
import { AppDispatch } from "../store";
import { setError, setIsAuth, setIsLoading, setUserRole } from "./AuthSlice";

export const checkRefreshToken = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await AuthService.chekAuth();
    localStorage.setItem("authentication", response.data.token);
    dispatch(setIsAuth(true));
    dispatch(setUserRole(response.data.role));
  } catch (e: any) {
    dispatch(setError(e.message));
    if (e?.response?.status === 401) {
      dispatch(setError(e?.response?.data?.message));
      localStorage.removeItem("authentication");
    } else {
      dispatch(setError(e.message));
    }
  } finally {
    dispatch(setIsLoading(false));
  }
};

// const handleHttpErrors = (e: any) => (dispatch: AppDispatch) => {
//   if (e.response.status >= 400 && e.response.status <= 599) {
//     dispatch(setError(e.response.data.message));
//   } else {
//     dispatch(setError(e.message));
//   }
// };
