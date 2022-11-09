import {useEffect, useState} from "react";
import {checkRefreshTokenAsync} from "../state/slices/AuthSlice";
import {useAppDispatch, useAppSelector} from "../hook/reduxHooks";

type Props = {};

const ServerErrorPage = (props: Props) => {
    const dispatch = useAppDispatch();
    const [time, setTime] = useState(new Date().getTime());
    const {userStatus, responseStatus} = useAppSelector((state) => state.auth);
    const {status} = userStatus;

    useEffect(() => {
        dispatch(checkRefreshTokenAsync());
        setTimeout(() => {
            const now = new Date().getTime();
            setTime(now);
        }, 60000 * 5);
    }, [time, dispatch]);

    return (
        <div>
            <h1>Сервер не отвечает</h1>
            {responseStatus === 'pending' ? 'loading...' : 'error'}
            {status === "server-unreachable" && <p>загрузка сервер...</p>}
        </div>
    );
};

export default ServerErrorPage;
