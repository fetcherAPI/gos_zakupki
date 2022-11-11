import { LotStep } from "./LotsStep";
import OrganizationInfoStep from "./OrganizationInfoStep";

export const STEPS = [
  {
    label: "Информация  об организации",
    element: <OrganizationInfoStep />,
  },
  {
    label: "Лоты",
    element: <LotStep />,
  },
  {
    label: "Квалификационные требования",
    element: <OrganizationInfoStep />,
  },
  {
    label: "Специальное требования",
    element: <OrganizationInfoStep />,
  },
  {
    label: "Особые условаия контракта",
    element: <OrganizationInfoStep />,
  },
  {
    label: "Комиссия по закупке",
    element: <OrganizationInfoStep />,
  },
  {
    label: "Утверждения",
    element: <OrganizationInfoStep />,
  },
];
