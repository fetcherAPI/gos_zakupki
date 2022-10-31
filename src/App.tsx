import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import ServerErrorPage from "./pages/ServerErrorPage";
import { checkRefreshTokenAsync } from "./state/slices/AuthSlice";
import { AppDispatch, RootState } from "./state/store";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(checkRefreshTokenAsync());
  }, []);

  const { status } = useSelector((state: RootState) => state.auth);
  // const status = "resolve";
  return status === "resolve" ? <MainPage /> : <ServerErrorPage />;
}

export default App;
