import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
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
      console.log("acion.payload", action.payload);
      const newTableData: Array<typeof action.payload> =
        state.criteriasGradeTableData.filter(
          (el: typeof action.payload) => el.key !== action.payload.key
        );
      console.log("newTableData", newTableData);
      state.criteriasGradeTableData = newTableData;
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
