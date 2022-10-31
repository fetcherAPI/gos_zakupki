import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainPage } from "./pages/MainPage";
import ServerErrorPage from "./pages/ServerErrorPage";
import { checkRefreshTokenAsync } from "./state/slices/AuthSlice";
import { AppDispatch, RootState } from "./state/store";
import Gotologin from "./comonents/Redirect/Gotologin";
import "./App.css";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(checkRefreshTokenAsync());
  }, [dispatch]);

  const { userStatus } = useSelector((state: RootState) => state.auth);
  const { status: userStat } = userStatus;
  if (userStat === "server-unreachable") {
    return <ServerErrorPage />;
  } else if (userStat === "logged-out") {
    return <Gotologin />;
  } else if (userStat === "logged-in") {
    return <MainPage />;
  } else {
    return <h1>Good </h1>;
  }
}

export default App;
