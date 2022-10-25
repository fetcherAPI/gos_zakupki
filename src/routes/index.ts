import React from "react";
import Sidebar from "../comonents/sidebar";
import Login from "../comonents/login";
import App from "../App";

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  LOGIN = "/login",
  SIDEBAR = "/sidebar",
  MAIN = "/",
}

export const privateRoutes: IRoute[] = [
  { path: RouteNames.SIDEBAR, component: Sidebar },
  { path: RouteNames.MAIN, component: App },
];

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: Login },
];
