/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from "./Attachment";

export type Product = {
  id?: string;
  count?: number;
  price?: number;
  specifications?: string;
  file?: Attachment;
};
