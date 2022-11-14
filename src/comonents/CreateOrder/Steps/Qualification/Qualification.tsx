import { Form, Button, Input, Select } from "antd";
import { ReactNode, useEffect, useState } from "react";
import { text } from "stream/consumers";
import { utilControllerService } from "../../../../services/utilContollerService";

type QualificationType = {
  id: number;
  title: string;
  required: boolean;
  template: string;
};

export const Qualification = () => {
  const [incoterm, setIncoterm] = useState<[]>([]);
  const [textAreaValue, setTextAreaValue] = useState<string>("");
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
    <Form
      autoComplete='off'
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
      onFinish={(values) => {
        console.log({ values });
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
  );
};
