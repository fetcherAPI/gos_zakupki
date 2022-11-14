import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../../routes";
import AddNewLot from "./AddNewLot";

export const LotStep = () => {
  const navigate = useNavigate();
  const [isAddBtnVisible, setIsAddBtnVisible] = useState<boolean>(true);

  return isAddBtnVisible ? (
    <Button onClick={() => setIsAddBtnVisible(false)}>Добавить лот</Button>
  ) : (
    <AddNewLot />
  );
};
