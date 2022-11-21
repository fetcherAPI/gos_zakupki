import { AddNewLotDetail } from "./../comonents/CreateOrder/Steps/AddNewLotDetail/AddNewLotDetail";
import React from "react";
import Gotologin from "../comonents/Redirect/Gotologin";
import { Invoice } from "../comonents/Invoice/Invoice";
import TenderList from "../comonents/TenderList/TenderList";
import { Settings } from "../comonents/Settings/Settings";
import CreateOrder from "../comonents/CreateOrder/CreateOrder";
import MainData from "../comonents/CreateOrder/MainData/MainData";
import AddNewLot from "../comonents/CreateOrder/Steps/AddNewLot";

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  INVIOS = "/invios",
  TENDER_LIST = "/tender-list",
  PLAN_GOZ_ZAKUPOK = "/plan-gz",
  CREATE_TENDER = "/create-tender",
  SETTINGS = "/settings",
  ADD_LOT = "/add-lot",
  ADD_LOT_DETAIL = "add-lot-detail",
  MAIN = "/",
}

export const privateRoutes: IRoute[] = [
  { path: RouteNames.TENDER_LIST, component: TenderList },
  { path: RouteNames.INVIOS, component: Invoice },
  { path: RouteNames.SETTINGS, component: Settings },
  { path: RouteNames.PLAN_GOZ_ZAKUPOK, component: CreateOrder },
  { path: RouteNames.CREATE_TENDER, component: MainData },
  { path: RouteNames.ADD_LOT, component: AddNewLot },
  { path: RouteNames.ADD_LOT_DETAIL, component: AddNewLotDetail },
];

export const publicRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: Gotologin },
];
