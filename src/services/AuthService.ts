import { AxiosResponse } from "axios";
import api from "../http";
import { RefreshResponce } from "../models/response/AuthResponse";
export default class CheckRefershTokenService {
  static async chekAuth(): Promise<AxiosResponse<RefreshResponce>> {
    return api.get<RefreshResponce>("/refresh_token");
  }
}
