import React, { useEffect, useState } from "react";
import { Button, Select } from "antd";
import classes from "./MainData.module.scss";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../../routes";
import { useAppDispatch, useAppSelector } from "../../../hook/reduxHooks";
import {
  setBuyingFormatsValue,
  setOrderViewValue,
  takeBuyingFormatList,
  takeOrderViewList,
} from "../../../state/slices/CreateOrderMainSlice";

const MainData: React.FC = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const {
    buyingFormatsList,
    orderView,
    error,
    queryStatus,
    buyingFormatValue,
    orderViewValue,
  } = useAppSelector((state) => state.createOrderMain);

  useEffect(() => {
    dispatch(takeBuyingFormatList());
    dispatch(takeOrderViewList());
  }, []);

  const handleCreateButton = () => {
    navigate(RouteNames.PLAN_GOZ_ZAKUPOK);
  };

  const handleSelectBuyingFormat = (e: any) => {
    dispatch(setBuyingFormatsValue(e.target.innerText));
  };

  const handleSelectOrderView = (e: any) => {
    dispatch(setOrderViewValue(e.target.innerText));
  };

  const isButtonDisabled = (): boolean => {
    if (
      error?.message ||
      (!buyingFormatValue && error?.message) ||
      !orderViewValue
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.selector}>
        <p>Формат закупок</p>
        <Select
          placeholder={"Выберите формат закупок"}
          className={classes.select}
          onClick={(e) => handleSelectBuyingFormat(e)}
          status={buyingFormatValue ? undefined : "error"}
          loading={queryStatus === "pending" ? true : false}
          options={buyingFormatsList}
        />
      </div>
      {buyingFormatValue ? null : (
        <p className={classes.error_txt}>поле обязательно для заполнения</p>
      )}
      <hr />
      <div className={classes.selector}>
        <p>Вид закупок</p>
        <Select
          onClick={(e) => handleSelectOrderView(e)}
          status={orderViewValue ? undefined : "error"}
          placeholder={"Выберите Вид закупок"}
          className={classes.select}
          options={orderView}
        />
      </div>
      {orderViewValue ? null : (
        <p className={classes.error_txt}>поле обязательно для заполнения</p>
      )}
      <hr />
      <div className={classes.selector}>
        <p>Метод закупок</p>
        <Select
          placeholder={"Выберите Метод закупок"}
          className={classes.select}
          options={buyingFormatsList}
        />
      </div>
      <hr />
      <div className={classes.selector}>
        <p>Внешняя системак</p>
        <Select
          disabled
          defaultValue={"Без внешней системы"}
          className={classes.select}
          options={buyingFormatsList}
        />
      </div>
      <hr />
      <div className={classes.selector}>
        <input type='checkbox' />
        <p>Применить асимметричное шифрование</p>
      </div>
      <Button
        type='primary'
        disabled={isButtonDisabled()}
        onClick={() => handleCreateButton()}
      >
        Создать объявление
      </Button>
    </div>
  );
};

export default MainData;
