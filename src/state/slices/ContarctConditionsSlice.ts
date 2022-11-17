import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

interface IData {
  DepsAndExtraRequirmentsForSparePart: string;
  delayProvide: string;
  disputeControl: boolean;
  ensureContract: string;
  ensurePeriod: string;

  ensure: boolean;

  goodsInsurance: boolean;
  maximumDeductSum: string;
  noMakedEnsureOughts: string;
  pack: string;
  placeTechnialCheck: string;
  processTechinalChecking: string;
  provideCondition: string;
  provideRedressPeriod: string;
  relatedServices: boolean;
  relatedServicesValue: string;
  sparePart: boolean;
  technicalControl: boolean;
  paymentTerm: string;
}

interface IPayload {
  payload: {
    value: string;
    prevState: boolean;
  };
}

interface Initial {
  contractConditions: IData[];
}

const initialState: Initial = {
  contractConditions: [
    {
      paymentTerm: "",
      DepsAndExtraRequirmentsForSparePart: "",
      delayProvide: "",
      disputeControl: false,
      ensureContract: "",
      ensurePeriod: "",

      ensure: false,

      goodsInsurance: false,
      maximumDeductSum: "",
      noMakedEnsureOughts: "",
      pack: "",
      placeTechnialCheck: "",
      processTechinalChecking: "",
      provideCondition: "",
      provideRedressPeriod: "",
      relatedServices: false,
      relatedServicesValue: "",
      sparePart: false,
      technicalControl: false,
    },
  ],
};

export const contractConditionsSlice = createSlice({
  name: "contractConditionsSlice",
  initialState,
  reducers: {
    setContractConditions(state, action) {
      state.contractConditions = action.payload;
    },
    setTechnicalControl(state) {
      const currentState = state.contractConditions[0]["technicalControl"];
      state.contractConditions[0]["technicalControl"] = !currentState;
    },

    setSparePart(state) {
      const currentState = state.contractConditions[0]["sparePart"];
      state.contractConditions[0]["sparePart"] = !currentState;
    },
    setEnsure(state) {
      const currentState = state.contractConditions[0]["ensure"];
      state.contractConditions[0]["ensure"] = !currentState;
    },
  },
});

export const {
  setContractConditions,
  setTechnicalControl,
  setSparePart,
  setEnsure,
} = contractConditionsSlice.actions;

export default contractConditionsSlice.reducer;
