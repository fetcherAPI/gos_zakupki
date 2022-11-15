import { createSlice } from "@reduxjs/toolkit";
import {
  IDataType,
  QualificationType,
} from "../../models/AppTypes/QualificationTypes";

interface IState extends IDataType {
  tableData: IDataType[];
  textAreaValue: string;
  selectedQualification: string;
  qualifiersList: QualificationType[];
}

const initialState: IState = {
  key: "",
  qualifiaction: "",
  requirements: "",
  tableData: [],
  textAreaValue: "",
  selectedQualification: "",
  qualifiersList: [],
};

export const QualificationSlice = createSlice({
  name: "QualificationSlice",
  initialState,
  reducers: {
    setQualification(state, action) {
      state.qualifiaction = action.payload;
    },
    setRequirements(state, action) {
      state.requirements = action.payload;
    },
    setTableData(state, action) {
      state.tableData = [...state.tableData, action.payload];
    },
    setSelectedQualification(state, action) {
      state.selectedQualification = action.payload;
    },
    setQualifiersList(state, action) {
      state.qualifiersList = action.payload;
    },
    setTextAreaValue(state, action) {
      state.textAreaValue = action.payload;
    },
    deleteTableData(state, action) {
      state.tableData = action.payload;
    },
  },
});

export const {
  setQualification,
  setRequirements,
  setTableData,
  setSelectedQualification,
  setQualifiersList,
  setTextAreaValue,
  deleteTableData,
} = QualificationSlice.actions;

export default QualificationSlice.reducer;
