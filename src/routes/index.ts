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
  MAIN = "/",
}

export const privateRoutes: IRoute[] = [
  { path: RouteNames.TENDER_LIST, component: TenderList },
  { path: RouteNames.INVIOS, component: Invoice },
  { path: RouteNames.SETTINGS, component: Settings },
  { path: RouteNames.PLAN_GOZ_ZAKUPOK, component: CreateOrder },
  { path: RouteNames.CREATE_TENDER, component: MainData },
  { path: RouteNames.ADD_LOT, component: AddNewLot },
];

export const publicRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: Gotologin },
];
