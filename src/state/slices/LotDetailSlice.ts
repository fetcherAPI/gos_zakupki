import { createSlice } from "@reduxjs/toolkit";

interface IOrganizationInfo<T> {
  productName: string;
  unitOfMeasure: string;
  unitPrice: string;
  technicalSpecification: string;
}

const initialState: IOrganizationInfo<string> = {
  productName: "",
  unitOfMeasure: "",
  unitPrice: "",
  technicalSpecification: "",
};

export const LotDetailSlice = createSlice({
  name: "organizationInfo",
  initialState,
  reducers: {
    setNameOfBuying(state, action) {
      state.productName = action.payload;
    },
  },
});

export const { setNameOfBuying } = LotDetailSlice.actions;

export default LotDetailSlice.reducer;
