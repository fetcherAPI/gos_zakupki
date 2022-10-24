import { UserData, LoginFormError } from "../models/types";

export const loginValidate = (values: UserData) => {
  const errors: LoginFormError = {
    username: "",
    password: "",
  };
  if (!values.username) {
    errors.username = "Required";
  } else if (!values.password) {
    errors.password = "password is Required";
  }
  return errors;
};
