/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IncotermType = {
  title?: string;
  data?: Incoterm.data;
};

export namespace Incoterm {
  export enum data {
    EXW = "EXW",
    FCA = "FCA",
    FAS = "FAS",
    FOB = "FOB",
    CFR = "CFR",
    CIF = "CIF",
    CIP = "CIP",
    CPT = "CPT",
    DAT = "DAT",
    DAP = "DAP",
    DDP = "DDP",
  }
}
