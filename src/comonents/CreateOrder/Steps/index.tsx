import { LotStep } from "./LotsStep";
import OrganizationInfoStep from "./OrganizationInfoStep";
import { Qualification } from "./Qualification/Qualification";
import { SpecalRequirments } from "./SpecialRequirments";

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
    element: <Qualification />,
  },
  {
    label: "Специальное требования",
    element: <SpecalRequirments />,
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
