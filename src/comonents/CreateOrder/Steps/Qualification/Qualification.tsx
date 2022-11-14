import { Form, Button, Input, Select } from "antd";
import { ReactNode, useEffect, useState } from "react";
import { Space, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { utilControllerService } from "../../../../services/utilContollerService";

type QualificationType = {
  id: number;
  title: string;
  required: boolean;
  template: string;
};

interface DataType {
  key: string;
  qualifiaction: string;

  requirements: string;
}

const data: DataType[] = [
  {
    key: "1",
    qualifiaction: "John Brown",
    requirements: "New York No. 1 Lake Park",
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: "Квалификация",
    dataIndex: "qualifiaction",
    key: "qualifiaction",
    render: (text) => <a>{text}</a>,
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
          style={{ fontSize: "30px", color: "#08c", cursor: "pointer" }}
        />
      </Space>
    ),
  },
];

export const Qualification = () => {
  const [incoterm, setIncoterm] = useState<[]>([]);
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [tableData, setTableData] = useState<DataType[]>([]);
  const { TextArea } = Input;

  useEffect(() => {
    utilControllerService
      .getListOfQualifiersList()
      .then((res) => setIncoterm(res.data));
  }, []);

  const handleSelect = (e: any) => {
    const text = e.target.innerHTML;
    const filteredIncoterm: Array<QualificationType> = incoterm.filter(
      (el: QualificationType): boolean => el.title === text
    );
    setTextAreaValue(filteredIncoterm[0]?.template);
  };

  const incotermSelectItems = incoterm.map(
    (el: QualificationType): ReactNode => {
      return (
        <Select.Option key={el.id} value={el.template}>
          {el.title}
        </Select.Option>
      );
    }
  );

  return (
    <>
      <Form
        autoComplete='off'
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        onFinish={(values) => {
          const newData: DataType = {
            key: values.qualification,
            qualifiaction: values.qualification,
            requirements: textAreaValue,
          };
          setTableData((prev) => [...prev, newData]);
          values.reset();
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
            onChange={(e) => setTextAreaValue(e.target.value)}
          />
          <p style={{ opacity: 0 }}>{textAreaValue}</p>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type='primary' htmlType='submit'>
            Добавить
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={tableData} />
    </>
  );
};