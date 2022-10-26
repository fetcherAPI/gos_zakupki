import React from "react";
import Sidebar from "../comonents/sidebar";
import App from "../App";
import Gotologin from "../comonents/Redirect/Gotologin";

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  SIDEBAR = "/sidebar",
  APP = "/app",
  MAIN = "/",
}

export const privateRoutes: IRoute[] = [
  { path: RouteNames.SIDEBAR, component: Sidebar },
  { path: RouteNames.APP, component: App },
];

export const publicRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: Gotologin },
];
