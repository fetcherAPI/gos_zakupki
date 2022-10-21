import { UserData, LoginFormError } from "../typescript/types";
export const loginValidate = (values: UserData) => {
  const errors: LoginFormError = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (!values.password) {
    errors.password = "password is Required";
  }
  return errors;
};
