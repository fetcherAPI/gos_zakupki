import AuthService from "../../services/AuthService";
import { checkUserRole } from "../../utils/checkUserRole";
import { AppDispatch } from "../store";
import { setError, setIsAuth, setIsLoading, setUserData } from "./AuthSlice";

export const loginFn =
  (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await AuthService.login(username, password);
      if (checkUserRole(response.data)) {
        localStorage.setItem("authentication", response.data.token);
        dispatch(setUserData(response.data));
        dispatch(setError(""));
        dispatch(setIsAuth(true));
      } else {
        throw new Error("Роль пользователя не валидный");
      }
    } catch (e: any) {
      dispatch(setError(e.message));
      handleHttpErrors(e);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const logOut = () => async (dispatch: AppDispatch) => {
  console.log("logout");
  try {
    dispatch(setIsLoading(true));
    localStorage.removeItem("authentication");
    dispatch(setIsAuth(false));
  } catch (e) {
    dispatch(handleHttpErrors(e));
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const checkRefreshAuth = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await AuthService.chekAuth();
    localStorage.setItem("authentication", response.data.token);
    dispatch(setIsAuth(true));
  } catch (e) {
    dispatch(handleHttpErrors(e));
    dispatch(setIsAuth(false));
    localStorage.removeItem("authentication");
  } finally {
    dispatch(setIsLoading(false));
  }
};

const handleHttpErrors = (e: any) => (dispatch: AppDispatch) => {
  if (e.response.status >= 400 && e.response.status <= 599) {
    dispatch(setError({ error: e.response.data.message }));
  } else {
    dispatch(setError({ error: e.message }));
  }
};
