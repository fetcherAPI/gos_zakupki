import { UserRoles, UserRole } from "../models/enums/userRoles";

export const isUserRoleCorrect = (value: string): value is UserRole => {
  return UserRoles.includes(value as UserRole);
};
