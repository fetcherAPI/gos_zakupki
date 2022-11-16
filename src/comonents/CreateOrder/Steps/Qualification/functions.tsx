import { useAppDispatch, useAppSelector } from "../../../../hook/reduxHooks";
import {
  deleteTableData,
  setSelectedQualification,
  setTableData,
  setTextAreaValue,
} from "../../../../state/slices/Qualification";
import { IDataType } from "../../../../models/AppTypes/QualificationTypes";
import { useSelect } from "../../../../hook/useSelect";

export const useHandleFunctions = () => {
  const dispatch = useAppDispatch();
  const { qualifiersList, tableData, selectedQualification, textAreaValue } =
    useAppSelector((state) => state.Qualification);

  const HandleSelect = (e: any) => {
    const { selectedValue, selectedTextAreaValue } = useSelect(
      qualifiersList,
      e
    );
    dispatch(setSelectedQualification(selectedValue));
    dispatch(setTextAreaValue(selectedTextAreaValue));
  };

  const handleDelete = (dataToDelete: IDataType) => {
    const newTableData: Array<IDataType> = tableData.filter(
      (el: IDataType) => el.qualifiaction !== dataToDelete.qualifiaction
    );
    dispatch(deleteTableData(newTableData));
  };

  const handleAdd = (values: any) => {
    const newData: IDataType = {
      key: selectedQualification,
      qualifiaction: selectedQualification,
      requirements: textAreaValue,
    };
    setSelectedQualification("");
    dispatch(setTextAreaValue(""));
    dispatch(setTableData(newData));
  };

  return { handleDelete, HandleSelect, handleAdd };
};
