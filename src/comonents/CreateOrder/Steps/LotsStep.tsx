import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../../routes";

export const LotStep = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(RouteNames.ADD_LOT)}>Добавить лот</Button>
  );
};
