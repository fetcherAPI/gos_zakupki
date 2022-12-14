import { Form, Button, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { validationRules } from "./validationShcema";
import { useState } from "react";
import DocumnetSelector from "../../../DocumentSelector";
import { Incoterms } from "../../../Incoterms";

export const AddNewLot = () => {
  const [documentsList, setDocumentsList] = useState<any>();
  const { TextArea } = Input;

  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    defaultFileList: [],
  };

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
      <Form.Item
        name='lotName'
        label='НАИМЕНОВАНИЕ ЛОТА'
        rules={[
          validationRules(
            "required",
            "Поле наименование лота обязательно для заполнения"
          ),
          validationRules("min", "Минимум 3 три символа", 0, 3),
          validationRules("max", "Максимум 255 три символа", 255, 0),
        ]}
      >
        <TextArea
          showCount
          maxLength={255}
          autoSize
          placeholder='Введите наименование лота'
        />
      </Form.Item>
      <Form.Item name='Plan' label='План закупок'>
        <Upload {...props}>
          <Button>
            <UploadOutlined type='upload' /> Выбрать план
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item
        name='Place'
        label='АДРЕС И МЕСТО ПОСТАВКИ'
        rules={[
          validationRules(
            "required",
            "Поле Адрес и место поставки обязательно для заполнения"
          ),
          validationRules("min", "Минимум 3 три символа", 0, 3),
          validationRules("max", "Максимум 255 три символа", 255, 0),
        ]}
      >
        <TextArea
          showCount
          maxLength={255}
          autoSize
          placeholder='Адрес и место поставки'
        />
      </Form.Item>
      <Form.Item
        name='TermsOfDeliveryOfGoods'
        label='СРОКИ ПОСТАВКИ ТОВАРА'
        rules={[
          validationRules(
            "required",
            "Поле сроки поставки товара обязательно для заполнения"
          ),
          validationRules("min", "Минимум 3 три символа", 0, 3),
          validationRules("max", "Максимум 255 три символа", 255, 0),
        ]}
      >
        <TextArea
          showCount
          maxLength={255}
          autoSize
          placeholder='сроки поставки товара'
        />
      </Form.Item>
      <Form.Item
        name='Condition'
        label='УСЛОВИЕ ПОСТАВКИ'
        rules={[
          validationRules(
            "required",
            "Поле условие поставки обязательно для заполнения"
          ),
          validationRules("min", "Минимум 3 три символа", 0, 3),
          validationRules("max", "Максимум 255 три символа", 255, 0),
        ]}
      >
        <TextArea
          showCount
          maxLength={255}
          autoSize
          placeholder='Условие поставки'
        />
      </Form.Item>

      <Form.Item
        name='0foreingCitizen'
        label='Для нерезидентов Кыргызской Республики'
      >
        <Incoterms />
        <br />
        <br />
        <Form.Item
          name='secondPlace'
          rules={[
            validationRules("min", "Минимум 3 три символа", 0, 3),
            validationRules("max", "Максимум 255 три символа", 255, 0),
          ]}
        >
          <TextArea autoSize placeholder='Адрес и место поставки' />
        </Form.Item>
      </Form.Item>
      <Form.Item name='Documnets' label={`ДОКУМЕНТЫ`}>
        <DocumnetSelector setDocumentsList={setDocumentsList} />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button block type='primary' htmlType='submit'>
          Добавить детали лота
        </Button>
      </Form.Item>
    </Form>
  );
};
