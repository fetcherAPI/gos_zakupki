import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { Button } from "antd";
import classes from "./MainData.module.scss";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../../routes";
import { useAppDispatch, useAppSelector } from "../../../hook/reduxHooks";
import {
  takeBuyingFormatList,
  takeOrderViewList,
} from "../../../state/slices/CreateOrderMainSlice";

const MainData: React.FC = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const { buyingFormatsList, orderView, error, queryStatus } = useAppSelector(
    (state) => state.createOrderMain
  );

  useEffect(() => {
    dispatch(takeBuyingFormatList());
    dispatch(takeOrderViewList());
  }, []);

  const handleCreateButton = () => {
    navigate(RouteNames.PLAN_GOZ_ZAKUPOK);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.selector}>
        <p>Формат закупок</p>
        <Select
          defaultValue={"Выберите формат закупок"}
          className={classes.select}
          status={error ? "error" : undefined}
          loading={queryStatus === "pending" ? true : false}
          options={buyingFormatsList}
        />
      </div>
      <hr />
      <div className={classes.selector}>
        <p>Вид закупок</p>
        <Select
          aria-required={true}
          defaultValue={"Выберите Вид закупок"}
          className={classes.select}
          options={orderView}
        />
      </div>
      <hr />
      <div className={classes.selector}>
        <p>Метод закупок</p>
        <Select
          defaultValue={"Выберите Метод закупок"}
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
      <Button type='primary' onClick={() => handleCreateButton()}>
        Создать объявление
      </Button>
    </div>
  );
};

export default MainData;
