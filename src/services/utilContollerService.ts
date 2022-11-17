import api from "../http";
import axios, { AxiosResponse } from "axios";
import { IncotermType } from "../api_swagger/models/Incoterm";

export class utilControllerService {
  static async getListOfIncoterm(): Promise<AxiosResponse<IncotermType[]>> {
    return api.get("http://localhost:8000/Incoterm");
  }

  static async getListOfLotsDocumnets(): Promise<AxiosResponse<[]>> {
    return api.get("http://localhost:8000/lotsDocuments");
  }

  static async getListOfQualifiersList(): Promise<AxiosResponse> {
    return api.get("http://localhost:8000/qualifiersWidhtFalseValue");
  }

  static async getListOfCriteriasList(): Promise<AxiosResponse> {
    return api.get("http://localhost:8000/criterias");
  }
}
