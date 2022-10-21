/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SortObject } from "./SortObject";

export type PageableObject = {
  offset?: number;
  sort?: SortObject;
  pageNumber?: number;
  pageSize?: number;
  paged?: boolean;
  unpaged?: boolean;
};
