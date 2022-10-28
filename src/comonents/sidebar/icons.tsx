import { CloseBtnIcon, MyAd } from "../../assets/img/export";

export const icons = [
  {
    element: <MyAd />,
    text: "Мои объявления",
    path: "tender-list",
  },
  {
    element: <CloseBtnIcon />,
    text: "Мои жалобы",
    path: "/settings",
  },
];

export type Icon = typeof icons[0];
