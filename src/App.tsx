import { useEffect, useState } from "react";
import { MainPage } from "./pages/MainPage";
import ServerErrorPage from "./pages/ServerErrorPage";
import { checkRefreshTokenAsync } from "./state/slices/AuthSlice";
import GotoLogin from "./comonents/Redirect/Gotologin";
import { useAppDispatch, useAppSelector } from "./hook/reduxHooks";
import "./App.css";
import axios from "axios";

function App() {
  const dispatch = useAppDispatch();
  const { userStatus, user, responseStatus } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    axios
      .get("http://10.200.24.103:8088/main/util/procurementMethod")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const [currentTime, setCurrentTime] = useState(Date.now());

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentTime(Date.now());
  //   }, 5 * 1000 * 60);
  //   if (currentTime > Date.parse(user?.expiryDate)) {
  //     dispatch(checkRefreshTokenAsync());
  //   }
  // }, [currentTime, dispatch, user?.expiryDate]);

  const { status } = userStatus;

  if (status === "server-unreachable") {
    return <ServerErrorPage />;
  } else if (status === "logged-out") {
    return <GotoLogin />;
  } else if (status === "logged-in") {
    return responseStatus === "resolve" ? <MainPage /> : <ServerErrorPage />;
  } else {
    return <h1>Good</h1>;
  }
}

export default App;
