import { createSlice } from "@reduxjs/toolkit";
import { ICriteria } from "../../models/AppTypes/QualificationTypes";

interface IState {
  criteriasGradeList: Array<ICriteria>;
  criteriasGradeTableData: Array<any>;
  selectedCriteriaGrade: string;
  conditionalGradeValue: string;
}

const initialState: IState = {
  criteriasGradeList: [],
  criteriasGradeTableData: [],
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
    deleteFromCriteriasGradeTableData(state, action) {
      state.criteriasGradeTableData = state.criteriasGradeTableData.filter(
        (el: typeof action.payload) => el.key !== action.payload.key
      );
    },
    setSelectedCriteriaGarde(state, action) {
      state.selectedCriteriaGrade = action.payload;
    },
    setConditionalGradeValue(state, action) {
      state.conditionalGradeValue = action.payload;
    },
    setCriteriasGradeTableData(state, action) {
      state.criteriasGradeTableData = [
        ...state.criteriasGradeTableData,
        action.payload,
      ];
    },
  },
});

export const {
  setCriteriasGradeList,
  setSelectedCriteriaGarde,
  setConditionalGradeValue,
  deleteFromCriteriasGradeTableData,
  setCriteriasGradeTableData,
} = SpecialRequirmentsSlice.actions;

export default SpecialRequirmentsSlice.reducer;
