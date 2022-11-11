import useForm from "react-hook-form";
import React, { useState, useRef, useEffect } from "react";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Steps } from "primereact/steps";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FileUpload } from "primereact/fileupload";
import { useNavigate, useLocation } from "react-router-dom";

export const AddNewLot = (props: Props) => {
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className='flex'>
      <Toast ref={toast}></Toast>{" "}
      <div className='field'>
        <label htmlFor='name'>Наименование закупки</label>
        <InputTextarea
          inputId='name'
          value={entity.name}
          onChange={(e) => onInputChange(e, "name")}
          cols={80}
          rows={10}
        />
      </div>
      <div className='field'>
        <label htmlFor='deliveryDetail'>Адрес и Место поставки</label>
        <InputTextarea
          inputId='deliveryDetail'
          value={entity.deliveryDetail}
          onChange={(e) => onInputChange(e, "deliveryDetail")}
          cols={80}
          rows={10}
        />
      </div>
      <div className='field'>
        <label htmlFor='deliveryPeriod'>Сроки поставки товара</label>
        <InputTextarea
          inputId='deliveryPeriod'
          value={entity.deliveryPeriod}
          onChange={(e) => onInputChange(e, "deliveryPeriod")}
          cols={80}
          rows={10}
        />
      </div>
      <div>
        <label htmlFor='file'>Прикрепить график поставок/работ/услуг</label>
        <FileUpload
          label='Прикрепить'
          id='file'
          mode='basic'
          name='file'
          url={uploadBaseURL}
          maxFileSize={1000000}
          onUpload={onBasicUpload}
          auto
        />
        <div>
          {!isEmpty(entity.file) ? (
            <a
              id='download'
              href={downloadBaseURL + entity.file}
              download={entity.fileName}
            >
              <Button label={entity.fileName} />
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>
      <div className='field'>
        <label htmlFor='deliveryCondition'>Условие поставки</label>
        <InputTextarea
          inputId='deliveryCondition'
          value={entity.deliveryCondition}
          onChange={(e) => onInputChange(e, "deliveryCondition")}
          cols={80}
          rows={10}
        />

        <Dropdown
          id='incoterms'
          value={entity.incoterm}
          width='200px'
          options={incoterms}
          onChange={(e) => onInputChange(e, "incoterm")}
          optionLabel='title'
          required
          autoFocus
        />
        <InputText
          inputId='noresidentConditionDelivery'
          value={entity.noresidentConditionDelivery}
          onChange={(e) => onInputChange(e, "noresidentConditionDelivery")}
          cols={80}
          rows={10}
        />
      </div>
      <div>
        Документы подтверждающие соответствие товара требованиям технической
        спецификации
      </div>
      <div className='field'>
        <Dropdown
          value={document}
          width='200px'
          onChange={(e) => setDocument(e.target.value)}
          options={documents}
          optionLabel='title'
          required
          autoFocus
        />
      </div>
      <Button label='Добавить' onClick={add} />
      <div>
        <DataTable value={entity.documents} responsiveLayout='scroll'>
          <Column field='title' header='Наименование документа' />
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "8rem" }}
          ></Column>
        </DataTable>
      </div>
      <h5>Формирование перечня товаров в лоте </h5>
      <div className='field'>
        <label htmlFor='count'>Количество</label>
        <InputText
          inputId='count'
          value={product.count}
          onChange={(e) => onProductInputChange(e, "count")}
        />
      </div>
      <div className='field'>
        <label htmlFor='price'>Цена за единицу</label>
        <InputText
          inputId='price'
          value={product.price}
          onChange={(e) => onProductInputChange(e, "price")}
        />
      </div>
      <div className='field'>
        <label htmlFor='specifications'>Техническая спецификация</label>
        <InputText
          inputId='specifications'
          value={product.specifications}
          onChange={(e) => onProductInputChange(e, "specifications")}
        />
      </div>
      <div>
        <label htmlFor='file'>Прикрепить документ</label>
        <FileUpload
          label='Прикрепить'
          id='file'
          mode='basic'
          name='file'
          url={uploadBaseURL}
          maxFileSize={1000000}
          onUpload={onBasicUploadProduct}
          auto
        />
        <div>
          {!isEmpty(product.file) ? (
            <a
              id='download'
              href={downloadBaseURL + product.file}
              download={product.fileName}
            >
              <Button label={product.fileName} />
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>
      <Button label='Добавить продукт' onClick={addLot} />
      <div>
        <DataTable value={entity.products} responsiveLayout='scroll'>
          <Column field='count' header='Количество' />
          <Column field='price' header='Цена за единицу' />
          <Column body={columnTotal} header='Сумма' />
          <Column field='specifications' header='Техническая спецификация' />
          <Column
            body={actionBodyProduct}
            exportable={false}
            style={{ minWidth: "8rem" }}
          ></Column>
        </DataTable>
      </div>
      <Button label='Сохранить Лот' onClick={gotoToStep2} />
    </div>
  );
};
