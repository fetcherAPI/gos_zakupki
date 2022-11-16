import React, { ReactNode, useEffect } from "react";
import { Form, Button, Input, Select } from "antd";
import Switcher from "../../../../UIComponents/switch";
import classes from "./SpecalRequirments.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../hook/reduxHooks";
import { useHandleFunctions } from "../Qualification/functions";
import { setTextAreaValue } from "../../../../state/slices/Qualification";
import {
  ICriteria,
  QualificationType,
} from "../../../../models/AppTypes/QualificationTypes";
import { utilControllerService } from "../../../../services/utilContollerService";
import {
  setConditionalGradeValue,
  setCriteriasGradeList,
  setSelectedCriteriaGarde,
} from "../../../../state/slices/SpecialRequirments";
import { useSelect } from "../../../../hook/useSelect";
type Props = {};

const Appoint = () => {};

export const SpecalRequirments = (props: Props) => {
  const { criteriasGradeList, conditionalGradeValue } = useAppSelector(
    (state) => state.SpecialRequirments
  );
  const { TextArea } = Input;
  const dispatch = useAppDispatch();
  const { handleAdd, handleDelete, HandleSelect } = useHandleFunctions();

  useEffect(() => {
    utilControllerService
      .getListOfCriteriasList()
      .then((res) => dispatch(setCriteriasGradeList(res.data)));
  }, []);

  const HandleSelectList = (e: any) => {
    const { selectedValue, selectedTextAreaValue } = useSelect(
      criteriasGradeList,
      e
    );
    dispatch(setSelectedCriteriaGarde(selectedValue));
    dispatch(setConditionalGradeValue(selectedTextAreaValue));
  };
  const incotermSelectItems = criteriasGradeList.map(
    (el: ICriteria): ReactNode => {
      return (
        <Select.Option
          key={el.id}
          value={el.template}
          onClick={(e: any) => HandleSelectList(e)}
        >
          {el.title}
        </Select.Option>
      );
    }
  );

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
          <Select placeholder='' onClick={(e: any) => HandleSelectList(e)}>
            {incotermSelectItems}
          </Select>
        </Form.Item>

        <Form.Item name='requirement' label='требование'>
          <TextArea
            defaultValue={conditionalGradeValue}
            value={conditionalGradeValue}
            autoSize
            onChange={(e: any) => dispatch(setTextAreaValue(e.target.value))}
          />
          <p style={{ opacity: 0 }}>{conditionalGradeValue}</p>
        </Form.Item>
        <Form.Item name='button' wrapperCol={{ span: 24 }}>
          <Button block type='primary' htmlType='submit'>
            Добавить
          </Button>
        </Form.Item>
      </Form>
      <div className={classes.appoint_block}>
        <span>ПРЕДЗАКУПОЧНОЕ СОВЕЩАНИЕ</span>
        <label onClick={() => console.log("fjdksj")}>
          <Switcher from='Нет' to='Да' />
        </label>
      </div>
    </div>
  );
};
