import React, { useState, useRef, useEffect } from "react";
import { Toast } from "primereact/toast";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import { Steps } from "primereact/steps";
import { useNavigate, useLocation } from "react-router-dom";
// import { TenderService } from "../service/TenderService";

export const LotStep = () => {
  let emptyEntity: entityType = {
    id: null,
    view: null,
    method: null,
    masterContract: false,
    name: "",
    dateContest: null,
    validnessPeriodOfBid: null,
    lots: [],
  };

  type entityType = {
    id: null | string | any;
    view: null | string;
    method: null | string;
    masterContract: boolean;
    name: string;
    lots: Array<any> | any;
    dateContest: null | string;
    validnessPeriodOfBid: null | string;
  };

  const toast = useRef(null);
  const [entity, setEntity] = useState(emptyEntity);
  const [submitted, setSubmitted] = useState(false);
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let c = location.state;
    setEntity(c);
  }, []);

  const gotoStep3 = () => {
    console.log("goto step4");
    console.log(entity);
    navigate("/step3", { state: entity });
  };

  const gotoLotForm = () => {
    console.log("goto gotoLotForm");
    console.log(entity);
    navigate("/step2/lot_from", { state: { orders: entity, lot: null } });
  };

  let headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header='№' rowSpan={2} />
        <Column header='Наименование лота' rowSpan={2} />
        <Column header='Адрес и Место поставки' rowSpan={2} />
        <Column header='Условие поставки' colSpan={2} />
        <Column header='Сумма' rowSpan={2} />
        <Column header='Настройки' rowSpan={2} />
      </Row>
      <Row>
        <Column header='Для резидентов Кыргызской Республики' />
        <Column header='Для нерезидентов Кыргызской Республики' />
      </Row>
    </ColumnGroup>
  );

  const nonDeliveryConditionBodyTemplate = (options: any) => {
    return (
      <React.Fragment>
        <div className='flex align-items-center justify-content-between px-2'>
          <span>
            {options.incoterm === null ? null : options.incoterm.title}
          </span>
          <span>{options.noresidentConditionDelivery}</span>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div>
      <div className='flex'>
        <Toast ref={toast}></Toast>
        <Button label='Добавить лот' onClick={gotoLotForm} />

        <DataTable
          //   value={entity.lots}
          headerColumnGroup={headerGroup}
          responsiveLayout='scroll'
        >
          <Column field='number' />
          <Column field='name' />
          <Column field='deliveryDetail' />
          <Column field='deliveryCondition' />
          <Column body={nonDeliveryConditionBodyTemplate} />
          <Column field='amount' />
        </DataTable>

        <Button label='Продолжить' onClick={gotoStep3} />
      </div>
    </div>
  );
};
