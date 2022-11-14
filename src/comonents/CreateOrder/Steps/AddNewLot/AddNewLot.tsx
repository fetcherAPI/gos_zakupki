import { Form, Button, Checkbox, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { validationRules } from "./validationShcema";
import { ReactNode, useEffect, useState } from "react";
import { IncotermType } from "../../../../api_swagger/models/Incoterm";
import { utilControllerService } from "../../../../services/utilContollerService";
import DocumnetSelector from "../../../DocumentSelector";

export const AddNewLot = () => {
  const [incoterm, setIncoterm] = useState<IncotermType[]>([
    { data: undefined, title: "Нет данных" },
  ]);
  const { TextArea } = Input;

  useEffect(() => {
    utilControllerService
      .getListOfIncoterm()
      .then((res) => setIncoterm(res.data));
  }, []);

  const incotermSelectItems = incoterm.map((el: IncotermType): ReactNode => {
    return (
      <Select.Option key={el.data} value={el.data}>
        {el.title}
      </Select.Option>
    );
  });
  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange({ file, fileList }: any) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
    defaultFileList: [],
  };

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
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
        <Select placeholder=''>{incotermSelectItems}</Select>
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
        <DocumnetSelector />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button block type='primary' htmlType='submit'>
          Добавить детали лота
        </Button>
      </Form.Item>
    </Form>
  );
};
