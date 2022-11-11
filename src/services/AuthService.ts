import { AxiosResponse } from "axios";
import api from "../http";
import { RefreshResponce } from "../models/response/RefreshResponse";

export default class CheckRefreshTokenService {
  static async checkAuth(): Promise<AxiosResponse<RefreshResponce>> {
    return api.get<RefreshResponce>("/refresh_token");
  }
}

export class CreateOrderService {
  static async getListOfFormatBuying(): Promise<AxiosResponse> {
    return api.get("http://localhost:8000/buyingFormat");
  }

  static async getListOfOrderView(): Promise<AxiosResponse> {
    return api.get("http://localhost:8000/orderView");
  }
}
