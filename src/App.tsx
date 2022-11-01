import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainPage } from "./pages/MainPage";
import ServerErrorPage from "./pages/ServerErrorPage";
import { checkRefreshTokenAsync } from "./state/slices/AuthSlice";
import { AppDispatch, RootState } from "./state/store";
import Gotologin from "./comonents/Redirect/Gotologin";
import "./App.css";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { userStatus, user } = useSelector((state: RootState) => state.auth);
  const [currentTime, setCurrentTime] = useState(Date.now());

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentTime(Date.now());
  //   }, 5 * 1000 * 60);
  //   if (currentTime > Date.parse(user?.expiryDate)) {
  //     dispatch(checkRefreshTokenAsync());
  //   }
  // }, [currentTime, dispatch, user?.expiryDate]);

  // useEffect(() => {
  //   dispatch(checkRefreshTokenAsync());
  // }, [dispatch]);

  const { status } = userStatus;

  if (status === "server-unreachable") {
    return <ServerErrorPage />;
  } else if (status === "logged-out") {
    return <Gotologin />;
  } else if (status === "logged-in") {
    return <MainPage />;
  } else {
    return <h1>Good </h1>;
  }
}

export default App;
