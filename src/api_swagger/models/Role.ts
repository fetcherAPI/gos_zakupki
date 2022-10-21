/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Role = {
  title?: string;
  data?: Role.data;
};

export namespace Role {
  export enum data {
    CHAIRMAN = "CHAIRMAN",
    MEMBERS = "MEMBERS",
  }
}
