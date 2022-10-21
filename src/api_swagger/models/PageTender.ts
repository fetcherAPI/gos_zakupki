/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageableObject } from "./PageableObject";
import type { SortObject } from "./SortObject";
import type { Tender } from "./Tender";

export type PageTender = {
  totalPages?: number;
  totalElements?: number;
  size?: number;
  content?: Array<Tender>;
  number?: number;
  sort?: SortObject;
  pageable?: PageableObject;
  first?: boolean;
  last?: boolean;
  numberOfElements?: number;
  empty?: boolean;
};
