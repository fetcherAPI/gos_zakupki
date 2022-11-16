import { useAppDispatch, useAppSelector } from "../../../../hook/reduxHooks";
import {
  deleteTableData,
  setSelectedQualification,
  setTableData,
  setTextAreaValue,
} from "../../../../state/slices/Qualification";
import {
  IDataType,
  QualificationType,
} from "../../../../models/AppTypes/QualificationTypes";

export const useHandleFunctions = () => {
  const dispatch = useAppDispatch();
  const { qualifiersList, tableData, selectedQualification, textAreaValue } =
    useAppSelector((state) => state.Qualification);

  const handleSelect = (e: any) => {
    const text: string = e.target.innerHTML;
    const filteredIncoterm: Array<QualificationType> = qualifiersList.filter(
      (el: QualificationType): boolean => el.title === text
    );
    dispatch(setSelectedQualification(text));
    dispatch(setTextAreaValue(filteredIncoterm[0]?.template));
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

  return { handleDelete, handleSelect, handleAdd };
};
