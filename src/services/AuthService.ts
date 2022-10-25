import axios, { AxiosResponse } from "axios";
import api from "../http";
import { AuthResponce } from "../models/response/AuthResponse";

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponce>> {
    return axios.post<AuthResponce>("http://10.200.24.103/api/authenticate", {
      username,
      password,
    });
  }

  static async chekAuth(): Promise<AxiosResponse<AuthResponce>> {
    return api.get<AuthResponce>("/refresh_token");
  }

  static async logout(): Promise<void> {
    return api.post("/logout");
  }
}
