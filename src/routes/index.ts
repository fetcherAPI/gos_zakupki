import React from "react";
import Gotologin from "../comonents/Redirect/Gotologin";
import {Invoice} from "../comonents/Invoice/Invoice";
import TenderList from "../comonents/TenderList/TenderList";
import {Settings} from "../comonents/Settings/Settings";
import CreateOrder from "../comonents/CreateOrder/CreateOrder";

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RouteNames {
    INVIOS = "/invios",
    TENDER_LIST = "/tender-list",
    PLAN_GOZ_ZAKUPOK = "/plan-gz",
    SETTINGS = "/settings",
    MAIN = "/",
}

export const privateRoutes: IRoute[] = [
    {path: RouteNames.TENDER_LIST, component: TenderList},
    {path: RouteNames.INVIOS, component: Invoice},
    {path: RouteNames.SETTINGS, component: Settings},
    {path: RouteNames.PLAN_GOZ_ZAKUPOK, component: CreateOrder},
];

export const publicRoutes: IRoute[] = [
    {path: RouteNames.MAIN, component: Gotologin},
];
