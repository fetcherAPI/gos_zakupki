import { CloseBtnIcon, MyAd } from "../../assets/img/export";
import { RouteNames } from "../../routes";

export const icons = [
  {
    element: <MyAd />,
    text: "Мои объявления",
    path: "/invios",
  },
  {
    element: <CloseBtnIcon />,
    text: "Мои жалобы",
    path: "/invios",
  },
];

export type Icon = typeof icons[0];
