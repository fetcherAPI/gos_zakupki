import api from "../http";
import { AxiosResponse } from "axios";
import { IncotermType } from "../api_swagger/models/Incoterm";

export class utilControllerService {
  static async getListOfIncoterm(): Promise<AxiosResponse<IncotermType[]>> {
    return api.get("http://localhost:8000/Incoterm");
  }
  static async getListOfLotsDocumnets(): Promise<AxiosResponse<[]>> {
    return api.get("http://localhost:8000/lotsDocuments");
  }
}
