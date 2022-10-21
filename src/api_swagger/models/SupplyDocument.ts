/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SupplyDocument = {
  title?: string;
  data?: SupplyDocument.data;
};

export namespace SupplyDocument {
  export enum data {
    INVOICE = "INVOICE",
    MOTOR_WAYBILL = "MOTOR_WAYBILL",
    INSURANCE_CERTIFICATE = "INSURANCE_CERTIFICATE",
    WARRANTY_CERTIFICATE = "WARRANTY_CERTIFICATE",
    TECH_CONTROL_CERTIFICATE = "TECH_CONTROL_CERTIFICATE",
    ORIGIN_CERTIFICATE = "ORIGIN_CERTIFICATE",
    OTHER_DOCUMENTS = "OTHER_DOCUMENTS",
  }
}
