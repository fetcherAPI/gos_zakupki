import { Form, Button, Input, Select } from "antd";
import { ReactNode, useContext, useEffect } from "react";
import { Table } from "antd";
import { utilControllerService } from "../../../../services/utilContollerService";
import { Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../../hook/reduxHooks";
import { useHandleFunctions } from "./functions";
import type { ColumnsType } from "antd/es/table";
import {
  QualificationType,
  IDataType,
} from "../../../../models/AppTypes/QualificationTypes";
import {
  setQualifiersList,
  setTextAreaValue,
} from "../../../../state/slices/Qualification";
import { handleNextContext } from "../../CreateOrder";

export const Qualification = () => {
  const dispatch = useAppDispatch();
  const { qualifiersList, tableData, textAreaValue } = useAppSelector(
    (state) => state.Qualification
  );
  const { handleSelect, handleAdd, handleDelete } = useHandleFunctions();
  const handleNext = useContext(handleNextContext);
  const { TextArea } = Input;

  useEffect(() => {
    utilControllerService
      .getListOfQualifiersList()
      .then((res) => dispatch(setQualifiersList(res.data)));
  }, []);

  const incotermSelectItems = qualifiersList.map(
    (el: QualificationType): ReactNode => {
      return (
        <Select.Option key={el.id} value={el.template}>
          {el.title}
        </Select.Option>
      );
    }
  );

  let locale = {
    emptyText: "Нет выбранных данных",
  };

  const columns: ColumnsType<IDataType> = [
    {
      title: "Квалификация",
      dataIndex: "qualifiaction",
      key: "qualifiaction",
    },
    {
      title: "Требования",
      dataIndex: "requirements",
      key: "requirements",
    },

    {
      title: "Действие",
      key: "action",
      render: (_, record) => (
        <Space size='middle'>
          <DeleteOutlined
            onClick={() => {
              handleDelete(record);
            }}
            style={{ fontSize: "30px", color: "#d84949", cursor: "pointer" }}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Form
        autoComplete='off'
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        onFinish={(values) => {
          handleAdd(values);
        }}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        <Form.Item name='qualification' label='КВАЛИФИКАЦИЯ'>
          <Select placeholder='' onClick={(e: any) => handleSelect(e)}>
            {incotermSelectItems}
          </Select>
        </Form.Item>

        <Form.Item name='requirement' label='требование'>
          <TextArea
            defaultValue={textAreaValue}
            value={textAreaValue}
            autoSize
            onChange={(e) => dispatch(setTextAreaValue(e.target.value))}
          />
          <p style={{ opacity: 0 }}>{textAreaValue}</p>
        </Form.Item>
        <Form.Item name='button' wrapperCol={{ span: 24 }}>
          <Button block type='primary' htmlType='submit'>
            Добавить
          </Button>
        </Form.Item>
      </Form>
      <Table locale={locale} columns={columns} dataSource={tableData} />
      <button onClick={() => handleNext()}>Сохранить</button>
    </>
  );
};
