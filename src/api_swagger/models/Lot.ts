/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from "./Attachment";
import type { Incoterm } from "./Incoterm";
import type { LotDocument } from "./LotDocument";
import type { Product } from "./Product";

export type Lot = {
  id?: string;
  name?: string;
  deliveryDetail?: string;
  deliveryPeriod?: string;
  noresidentConditionDelivery?: string;
  deliveryCondition?: string;
  incoterm?: Incoterm;
  documents?: Array<LotDocument>;
  products?: Array<Product>;
  file?: Attachment;
  number?: string;
};
