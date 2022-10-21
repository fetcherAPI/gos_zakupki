/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from "./Role";

export type Commissioner = {
  id?: string;
  number?: string;
  pin?: string;
  fullName?: string;
  organization?: string;
  position?: string;
  email?: string;
  role?: Role;
};
