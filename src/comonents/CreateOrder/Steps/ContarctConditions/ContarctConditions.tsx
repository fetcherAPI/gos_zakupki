import React from "react";
import { validationRules } from "../AddNewLot/validationShcema";
import {
  Form,
  Button,
  Checkbox,
  DatePicker,
  Input,
  Select,
  Space,
  Radio,
} from "antd";
import { Incoterms } from "../../../Incoterms";
type Props = {};

export const ContarctConditions = (props: Props) => {
  const { TextArea } = Input;
  return (
    <div>
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
          name='ensureContract'
          label='ГАРАНТИЙНОЕ ОБЕСПЕЧЕНИЕ ИСПОЛНЕНИЯ КОНТРАКТА'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
        >
          <Input
            type='number'
            placeholder='Введите размер до 10%'
            max={10}
            step={0.1}
          />
        </Form.Item>

        <Form.Item
          name='pack'
          label='УПАКОВКА'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
            validationRules("min", "Минимум 2 сивола", 0, 2),
            validationRules("max", "Мксимум 1000 сиволов", 1000, 0),
            validationRules("whitespace", "пустой пробел"),
          ]}
        >
          <TextArea
            showCount
            maxLength={1000}
            placeholder='Укажите способ упаковки'
            autoSize={{ minRows: 3 }}
          />
        </Form.Item>

        {/* СТРАХОВАНИЕ ТОВАРА */}
        <Form.Item
          name='goodsInsurance'
          label='СТРАХОВАНИЕ ТОВАРА'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
        >
          <Radio.Group>
            <Radio value={true}>Да</Radio>
            <Radio value={false}>Нет</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Если страх.товара есть становится видимым блоком */}
        <Form.Item
          name='provideCondition'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
          label='УСЛОВИЕ ПОСТАВКИ'
        >
          <Incoterms />
        </Form.Item>

        {/* СОПУТСТВУЮЩИЕ УСЛУГИ */}
        <Form.Item
          name='relatedServices'
          label='СОПУТСТВУЮЩИЕ УСЛУГИ'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
        >
          <Radio.Group>
            <Radio value={true}>Да</Radio>
            <Radio value={false}>Нет</Radio>
          </Radio.Group>
        </Form.Item>
        {/* Если СОПУТСТВУЮЩИЕ УСЛУГИ  есть становится видимым блоком */}
        <Form.Item
          name='relatedServicesValue'
          label='Услуги'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
            validationRules("min", "Минимум 2 сивола", 0, 2),
            validationRules("max", "Мксимум 1000 сиволов", 1000, 0),
            validationRules("whitespace", "пустой пробел"),
          ]}
        >
          <TextArea
            showCount
            maxLength={1000}
            placeholder='Укажите способ упаковки'
            autoSize={{ minRows: 3 }}
          />
        </Form.Item>

        <Form.Item
          name='paymentTerm'
          label='СРОК ОПЛАТЫ'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
        >
          <DatePicker
            style={{ width: "100%" }}
            picker='date'
            placeholder='Выберите срок оплаты'
          />
        </Form.Item>

        {/* //checked */}
        <Form.Item
          name='agreement'
          wrapperCol={{ span: 24 }}
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      "To proceed, you need to agree with our terms and conditions"
                    ),
            },
          ]}
        >
          <Checkbox>
            {" "}
            Agree to our <a href='#'>Terms and Conditions</a>
          </Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type='primary' htmlType='submit'>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};