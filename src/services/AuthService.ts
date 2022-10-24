import axios, { AxiosResponse } from "axios";
import api from "../http";
import { AuthResponce } from "../models/response/AuthResponse";

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponce>> {
    return axios.post<AuthResponce>("http://10.100.4.164:8087/authenticate", {
      username,
      password,
    });
  }

  static async logout(): Promise<void> {
    return api.post("/logout");
  }
}
