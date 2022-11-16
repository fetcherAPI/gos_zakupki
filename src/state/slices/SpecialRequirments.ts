import { createSlice } from "@reduxjs/toolkit";
import { ICriteria } from "../../models/AppTypes/QualificationTypes";

interface IState {
  criteriasGradeList: Array<ICriteria>;
  selectedCriteriaGrade: string;
  conditionalGradeValue: string;
}

const initialState: IState = {
  criteriasGradeList: [],
  selectedCriteriaGrade: "",
  conditionalGradeValue: "",
};

export const SpecialRequirmentsSlice = createSlice({
  name: "SpecialRequirmentsSlice",
  initialState,
  reducers: {
    setCriteriasGradeList(state, action) {
      console.log("action.payload", action.payload);
      state.criteriasGradeList = action.payload;
    },
    deleteFromCriteriasGradeList(state, action) {
      state.criteriasGradeList = [...state.criteriasGradeList, action.payload];
    },
    setSelectedCriteriaGarde(state, action) {
      state.selectedCriteriaGrade = action.payload;
    },
    setConditionalGradeValue(state, action) {
      state.conditionalGradeValue = action.payload;
    },
  },
});

export const {
  setCriteriasGradeList,
  setSelectedCriteriaGarde,
  setConditionalGradeValue,
  deleteFromCriteriasGradeList,
} = SpecialRequirmentsSlice.actions;

export default SpecialRequirmentsSlice.reducer;
