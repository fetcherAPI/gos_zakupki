import React from "react";
import Sidebar from "../comonents/sidebar";
import App from "../App";
import Gotologin from "../comonents/Redirect/Gotologin";
import { Invoice } from "../comonents/Invoice/Invoice";
import TenderList from "../comonents/TenderList/TenderList";

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  SIDEBAR = "/sidebar",
  APP = "/app",
  INVIOS = "/invios",
  TENDER_LIST = "tender-list",
  MAIN = "/",
}

export const privateRoutes: IRoute[] = [
  { path: RouteNames.SIDEBAR, component: Sidebar },
  { path: RouteNames.APP, component: App },
  { path: RouteNames.TENDER_LIST, component: TenderList },
  { path: RouteNames.INVIOS, component: Invoice },
];

export const publicRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: Gotologin },
];
