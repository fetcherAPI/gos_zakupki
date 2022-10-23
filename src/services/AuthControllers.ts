import AuthService from "./AuthService";

export const login = async (username: string, password: string) => {
  try {
    const res = await AuthService.login(username, password);
    localStorage.setItem("Authorization", res.data.token);
    return res;
  } catch (error) {
    return error;
  }
};
