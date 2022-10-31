import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkRefreshTokenAsync } from "../state/slices/AuthSlice";
import { AppDispatch, RootState } from "../state/store";

type Props = {};

const ServerErrorPage = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();

  const [time, setTime] = useState(new Date().getTime());
  const { userStatus } = useSelector((state: RootState) => state.auth);
  const { status } = userStatus;

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
      {status === "server-unreachable" && <p>загрузка сервер...</p>}
    </div>
  );
};

export default ServerErrorPage;
