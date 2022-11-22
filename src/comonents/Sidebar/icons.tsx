import {
  MyAd,
  Smeta,
  BudgetOughts,
  CancelBuy,
  Complaints,
  Contracts,
  Logo,
  Notice,
  PlanGozZkupok,
  Provider,
} from "../../assets/img/export";
export {
  MyAd,
  Smeta,
  BudgetOughts,
  CancelBuy,
  Complaints,
  Contracts,
  Logo,
  Notice,
  PlanGozZkupok,
  Provider,
};
export const icons = [
  {
    element: MyAd,
    text: "Мои объявления",
    path: "tender-list",
  },
  {
    element: Smeta,
    text: "Смета",
    path: "/settings",
  },
  {
    element: PlanGozZkupok,
    text: "Планирование гоз.закупок",
    path: "/plan-gz",
  },
  {
    element: Contracts,
    text: "Контракты",
    path: "/create-tender",
  },
  {
    element: Notice,
    text: "уведомления",
    path: "/notice",
  },
  {
    element: Complaints,
    text: "Мои жалобы",
    path: "/complaints",
  },
  {
    element: Provider,
    text: "Инициированные поставщики",
    path: "/provider",
  },
  {
    element: CancelBuy,
    text: "Отмена закупок",
    path: "/cancel-buy",
  },
  {
    element: BudgetOughts,
    text: "Бюджетные обязательства",
    path: "/budget-oughts",
  },
  {
    element: Logo,
    text: "Настройки",
    path: "/settings",
  },
];

export type Icon = typeof icons[0];
