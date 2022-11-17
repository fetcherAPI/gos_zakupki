import { ReactNode, useEffect, useState } from "react";
import { Form, Button, Input, Select, DatePicker, Table, Space } from "antd";
import Switcher from "../../../../UIComponents/switch";
import classes from "./SpecalRequirments.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../hook/reduxHooks";
import { ICriteria } from "../../../../models/AppTypes/QualificationTypes";
import { utilControllerService } from "../../../../services/utilContollerService";
import {
  deleteFromCriteriasGradeTableData,
  setConditionalGradeValue,
  setCriteriasGradeList,
  setCriteriasGradeTableData,
  setSelectedCriteriaGarde,
} from "../../../../state/slices/SpecialRequirments";
import { useSelect } from "../../../../hook/useSelect";
import { DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

type Props = {};
interface INewDataType {
  key: number;
  criteriaGrade: string;
  conditionGrade: string;
}

const Appoint = () => {
  const { TextArea } = Input;
  return (
    <Form
      autoComplete='off'
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 10 }}
      onFinish={(values) => {
        console.log({ values });
      }}
      onFinishFailed={(error) => {
        console.log({ error });
      }}
    >
      <Form.Item
        name='dob'
        label='Дата и время'
        rules={[
          {
            required: true,
            message: "Выберите дату и время совещания",
          },
        ]}
        hasFeedback
      >
        <DatePicker
          showTime
          style={{ width: "100%" }}
          picker='date'
          placeholder='Дата и время'
        />
      </Form.Item>
      <Form.Item
        name='fullName'
        label='Адрес проведения'
        rules={[
          {
            required: true,
            message: "Введите фдрес и место проведения совещания",
          },
          { whitespace: true },
          { min: 3 },
        ]}
      >
        <TextArea placeholder='Адрес и место проведения' />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button block type='primary' htmlType='submit' style={{ width: "30%" }}>
          Добавить адрес и время встречи
        </Button>
      </Form.Item>
    </Form>
  );
};

export const SpecalRequirments = (props: Props) => {
  const {
    criteriasGradeList,
    conditionalGradeValue,
    criteriasGradeTableData,
    selectedCriteriaGrade,
  } = useAppSelector((state) => state.SpecialRequirments);
  const [isAppointBlockVisible, setIsAppointBlockVisible] =
    useState<boolean>(true);
  const { TextArea } = Input;
  const dispatch = useAppDispatch();

  useEffect(() => {
    utilControllerService.getListOfCriteriasList().then((res) => {
      dispatch(setCriteriasGradeList(res.data));
    });
  }, []);

  const HandleSelectList = (e: any) => {
    const { selectedValue, selectedTextAreaValue } = useSelect(
      criteriasGradeList,
      e
    );
    dispatch(setSelectedCriteriaGarde(selectedValue));
    dispatch(setConditionalGradeValue(selectedTextAreaValue));
  };

  const handleAdd = () => {
    const newData: INewDataType = {
      key: Date.now(),
      criteriaGrade: selectedCriteriaGrade,
      conditionGrade: conditionalGradeValue,
    };
    dispatch(setCriteriasGradeTableData(newData));
    dispatch(setConditionalGradeValue(""));
  };

  const handleDelete = () => {};

  const incotermSelectItems = criteriasGradeList.map(
    (el: ICriteria): ReactNode => {
      return (
        <Select.Option key={el.id} value={el.title}>
          {el.title}
        </Select.Option>
      );
    }
  );

  console.log("criteriasGradeTableData", criteriasGradeTableData);

  const columns: ColumnsType<any> = [
    {
      title: "Критерий оценки",
      dataIndex: "criteriaGrade",
      key: "criteriaGrade",
    },
    {
      title: "Условие оценки",
      dataIndex: "conditionGrade",
      key: "conditionGrade",
    },

    {
      title: "Настройки",
      key: "setting",
      render: (_, record) => (
        <Space size='middle' key={record.key}>
          <DeleteOutlined
            onClick={() => dispatch(deleteFromCriteriasGradeTableData(record))}
            style={{ fontSize: "30px", color: "#d84949", cursor: "pointer" }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>
        В ходе оценки закупающая организация отклоняет предложение в случае,
        если:
      </h1>
      <p>{`1) поставщик (подрядчик), представивший данное предложение, не соответствует квалификационным требованиям, установленным в документации по закупке;`}</p>
      <p>{`2) поставщики (подрядчики) не подписали декларацию, гарантирующую предложение, либо не представили гарантийное обеспечение предложения поставщика (если требуется условием документации по закупке);`}</p>
      <p>{`3) поставщики (подрядчики) имеют задолженность по налогам или по страховым взносам по государственному социальному страхованию и социальным выплатам;`}</p>
      <p>{`4) технические параметры, предложенные в предложении, не соответствуют технической спецификации документации по закупке;`}</p>
      <p>{`5)данное предложение по существу не отвечает требованиям документации по закупке.
Закупающая организация отклоняет предложение, если она определила, что цена предложения чрезмерно занижена в отношении предмета закупок и вызывает сомнение в способности поставщика (подрядчика), представившего предложение, исполнить договор о закупках при условии, что закупающая организация запросила (в письменной форме) у поставщика (подрядчика) детальную информацию относительно предложения по тем позициям, которые вызывают сомнения в способности поставщика (подрядчика) исполнить договор. Решение закупающей организации отклонить предложение в соответствии с настоящей статьей, причины такого решения заносятся в протокол процедур закупок.`}</p>

      <Form
        autoComplete='off'
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 10 }}
        onFinish={(values) => {
          handleAdd();
        }}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        <Form.Item name='qualification' label='КРИТЕРИЙ ОЦЕНКИ'>
          <Select placeholder='' onClick={(e: any) => HandleSelectList(e)}>
            {incotermSelectItems}
          </Select>
        </Form.Item>

        <Form.Item name='requirement' label='УСЛОВИЕ ОЦЕНКИ'>
          <TextArea
            defaultValue={conditionalGradeValue}
            value={conditionalGradeValue}
            autoSize={{ minRows: 3 }}
            showCount
            maxLength={500}
            onChange={(e: any) =>
              dispatch(setConditionalGradeValue(e.target.value))
            }
          />
          <p style={{ opacity: 0 }}>{conditionalGradeValue}</p>
        </Form.Item>
        <Form.Item name='button' wrapperCol={{ span: 24 }}>
          <Button
            block
            type='primary'
            htmlType='submit'
            disabled={!conditionalGradeValue ? true : false}
          >
            Добавить
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={criteriasGradeTableData} />
      <div>
        <label
          className={classes.appoint_block}
          onClick={() => setIsAppointBlockVisible((prev) => !prev)}
        >
          <span>ПРЕДЗАКУПОЧНОЕ СОВЕЩАНИЕ</span>
          <Switcher from='Нет' to='Да' />
        </label>
        {isAppointBlockVisible ? <Appoint /> : null}
      </div>
    </div>
  );
};
