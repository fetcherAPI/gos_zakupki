/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatusResponse } from "../models/StatusResponse";
import type { Tender } from "../models/Tender";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class TenderControllerService {
  public static get(id: string): CancelablePromise<Tender> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/tender/{id}",
      path: {
        id: id,
      },
    });
  }

  public static update(requestBody: Tender): CancelablePromise<Tender> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/tender/{id}",
      body: requestBody,
    });
  }

  public static delete(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/tender/{id}",
      path: {
        id: id,
      },
    });
  }

  public static create(requestBody: Tender): CancelablePromise<Tender> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/tender",
      body: requestBody,
    });
  }

  public static publish(id: string): CancelablePromise<StatusResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/tender/publish/{id}",
      path: {
        id: id,
      },
    });
  }

  public static list(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/tender/list",
    });
  }

  public static listByParam(
    first: number,
    rows: number,
    sortField?: string,
    sortOrder?: number
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/tender/listByParam",
      query: {
        first: first,
        rows: rows,
        sortField: sortField,
        sortOrder: sortOrder,
      },
    });
  }
}
