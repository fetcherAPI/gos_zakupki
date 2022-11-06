import {useEffect, useState} from "react";
import {MainPage} from "./pages/MainPage";
import ServerErrorPage from "./pages/ServerErrorPage";
import {checkRefreshTokenAsync} from "./state/slices/AuthSlice";
import Gotologin from "./comonents/Redirect/Gotologin";
import "./App.css";
import {useAppDispatch, useAppSelector} from "./hook/redux";

function App() {
    const dispatch =  useAppDispatch();
    const {userStatus, user} =  useAppSelector(state => state.auth)
    const [currentTime, setCurrentTime] = useState(Date.now());

     useEffect(() => {
       setTimeout(() => {
         setCurrentTime(Date.now());
       }, 5 * 1000 * 60);
       if (currentTime > Date.parse(user?.expiryDate)) {
         dispatch(checkRefreshTokenAsync());
       }
     }, [currentTime, dispatch, user?.expiryDate]);

    useEffect(() => {
        dispatch(checkRefreshTokenAsync());
    }, [dispatch]);
    const {status} = userStatus;

    if (status === "server-unreachable") {
        return <ServerErrorPage/>;
    } else if (status === "logged-out") {
        return <Gotologin/>;
    } else if (status === "logged-in") {

        return <MainPage/>;
    } else {
        return <h1>Good </h1>;

    }
}

export default App;
