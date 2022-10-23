import { AxiosResponse } from "axios";
import api from "../http";
import { AuthResponce } from "../models/response/AuthResponse";

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponce>> {
    return api.post<AuthResponce>("/authenticate", { username, password });
  }

  static async logout(): Promise<void> {
    return api.post("/logout");
  }
}
