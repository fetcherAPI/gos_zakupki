/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageTender } from "../models/PageTender";
import type { Tender } from "../models/Tender";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class PublicTenderControllerService {
  public static publishedOrder(
    first: number,
    rows: number
  ): CancelablePromise<PageTender> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/public_tender/published",
      query: {
        first: first,
        rows: rows,
      },
      errors: {
        403: `Forbidden`,
      },
    });
  }

  public static getPublishedTender(id: string): CancelablePromise<Tender> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/public_tender/get/{id}",
      path: {
        id: id,
      },
      errors: {
        403: `Forbidden`,
      },
    });
  }

  public static get1(id: string): CancelablePromise<Blob> {
    return __request(OpenAPI, {
      method: "GET",
      headers: ["User-Agent"],
      url: "/public_tender/downloadAll/{id}",
      path: {
        id: id,
      },
      errors: {
        403: `Forbidden`,
      },
    });
  }
}
