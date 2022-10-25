import USER_ROLES from "../models/enums/userRoles";
import { AuthResponce } from "../models/response/AuthResponse";

export const checkUserRole = (data: AuthResponce) => {
  if (
    USER_ROLES.PROCURING_ENTITY === data.role ||
    USER_ROLES.PROCURING_ENTITY_HEAD === data.role ||
    USER_ROLES.PROCURING_ENTITY_MANAGER === data.role
  ) {
    localStorage.setItem("authentication", data.token);
  } else {
    localStorage.removeItem("authentication");
    throw new Error("role is not correct");
  }
};
