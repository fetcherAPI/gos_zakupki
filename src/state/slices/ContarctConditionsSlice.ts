import { createSlice } from "@reduxjs/toolkit";

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
  contractProject: any;
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
      contractProject: "",
    },
  ],
};

export const contractConditionsSlice = createSlice({
  name: "contractConditionsSlice",
  initialState,
  reducers: {
    setContractConditions(state, action) {
      state.contractConditions = [action.payload];
    },
    setTechnicalControl(state, action) {
      state.contractConditions[0]["technicalControl"] = action.payload;
    },

    setSparePart(state, action) {
      state.contractConditions[0]["sparePart"] = action.payload;
    },
    setEnsure(state, action) {
      state.contractConditions[0]["ensure"] = action.payload;
    },
    setContractProject(state, action) {
      state.contractConditions[0].contractProject = action.payload;
    },
  },
});

export const {
  setContractConditions,
  setTechnicalControl,
  setSparePart,
  setEnsure,
  setContractProject,
} = contractConditionsSlice.actions;

export default contractConditionsSlice.reducer;
