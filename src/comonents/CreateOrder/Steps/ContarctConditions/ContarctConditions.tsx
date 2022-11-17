import React from "react";
import { validationRules } from "../AddNewLot/validationShcema";
import { Form, Button, Checkbox, DatePicker, Input, Radio } from "antd";
import { Incoterms } from "../../../Incoterms";
import { useAppDispatch, useAppSelector } from "../../../../hook/reduxHooks";
import {
  setContractConditions,
  setTechnicalControl,
} from "../../../../state/slices/ContarctConditionsSlice";
type Props = {};

export const ContarctConditions = (props: Props) => {
  const dispatch = useAppDispatch();
  const { contractConditions } = useAppSelector(
    (state) => state.contractConditions
  );
  const { technicalControl } = contractConditions[0];
  const { TextArea } = Input;
  return (
    <div>
      <Form
        autoComplete='off'
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        onFinish={(values) => {
          console.log({ values });
          dispatch(setContractConditions(values));
        }}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        {/* ГАРАНТИЙНОЕ ОБЕСПЕЧЕНИЕ ИСПОЛНЕНИЯ КОНТРАКТА */}
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

        {/* УПАКОВКА */}
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
        <div>
          <Form.Item
            name='provideCondition'
            rules={[]}
            label='УСЛОВИЕ ПОСТАВКИ'
            initialValue={"fds"}
          >
            <Incoterms />
          </Form.Item>
        </div>

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
        <div>
          <Form.Item
            name='relatedServicesValue'
            label='Услуги'
            rules={[
              validationRules(
                "required",
                "Это обязательное поле для заполнения"
              ),
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
        </div>

        {/* СРОК ОПЛАТЫ */}
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

        {/* НЕУСТОЙКИЗА НЕСВОЕВРЕМЕННУЮ ПОСТАВКУ */}
        <Form.Item
          name='delayProvide'
          label='НЕУСТОЙКИЗА НЕСВОЕВРЕМЕННУЮ ПОСТАВКУ'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
        >
          <Input
            type='number'
            placeholder='Введите значение не превышающую 0.1% за каждый день'
            max={5}
            min={0}
            step={0.1}
          />
        </Form.Item>

        {/* ЗА НЕСВОЕВРЕМЕННУЮ ОПЛАТУ */}
        <Form.Item
          name='ensureContract'
          label='ЗА НЕСВОЕВРЕМЕННУЮ ОПЛАТУ'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
        >
          {/* Максимально вычитаемая сумма */}
          <p>Максимально вычитаемая сумма</p>
          <Input
            type='number'
            placeholder='Введите значение не превышающую 5% от цены контракта'
            max={5}
            min={0}
            step={0.1}
          />
          <br />
          <br />
          {/* Ставка за каждый просроченный день */}
          <p>Ставка за каждый просроченный день</p>
          <Input
            type='number'
            placeholder='Введите значение не превышающую 0.1% за каждый день'
            max={0.1}
            min={0}
            step={0.001}
          />
          <br />
          <br />
          {/* Максимально вычитаемая сумма */}
          <p>Максимально вычитаемая сумма</p>
          <Input
            type='number'
            placeholder='Введите значение не превышающую 5% от цены контракта'
            max={5}
            min={0}
            step={0.1}
          />
        </Form.Item>

        {/* ТЕХНИЧЕСКИЙ КОНТРОЛЬ И ИСПЫТАНИЯ*/}
        <Form.Item
          name='technicalControl'
          label=' ТЕХНИЧЕСКИЙ КОНТРОЛЬ И ИСПЫТАНИЯ'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
        >
          <Radio.Group onChange={() => dispatch(setTechnicalControl())}>
            <Radio value={true}>да</Radio>
            <Radio value={false}>Нет</Radio>
          </Radio.Group>
        </Form.Item>
        {/*Блок для описания ТЕХНИЧЕСКИЙ КОНТРОЛЬ И ИСПЫТАНИЯ*/}
        {technicalControl ? (
          <div>
            <Form.Item
              name='processTechinalChecking'
              label='ПРОЦЕДУРЫ ТЕХНИЧЕСКОГО КОНТРОЛЯ'
              rules={[
                validationRules(
                  "required",
                  "Это обязательное поле для заполнения"
                ),
                validationRules("min", "Минимум 2 сивола", 0, 2),
                validationRules("max", "Мксимум 1000 сиволов", 1000, 0),
                validationRules("whitespace", "пустой пробел"),
              ]}
            >
              <TextArea
                showCount
                maxLength={1000}
                placeholder='УКАЖИТЕ ПРОЦЕДУРЫ ТЕХНИЧЕСКОГО КОНТРОЛЯ И ИСПЫТАНИЙ, А ТАКЖЕ ЛЮБЫЕ ИСПЫТАНИЯ ДО ОТГРУЗКИ ТОВАРОВ И ПРИ ОКОНЧАТЕЛЬНОЙ ПРИЕМКЕ'
                autoSize={{ minRows: 3 }}
              />
            </Form.Item>
            <Form.Item
              name='placeTechnialCheck'
              label='ПРОЦЕДУРЫ ТЕХНИЧЕСКОГО КОНТРОЛЯ'
              rules={[
                validationRules(
                  "required",
                  "Это обязательное поле для заполнения"
                ),
                validationRules("min", "Минимум 2 сивола", 0, 2),
                validationRules("max", "Мксимум 1000 сиволов", 255, 0),
                validationRules("whitespace", "пустой пробел"),
              ]}
            >
              <TextArea
                showCount
                maxLength={255}
                placeholder='УКАЖИТЕ МЕСТО ПРЕДПОЛАГАЕМОГО ТЕХ. КОНТРОЛЯ И ИСПЫТАНИЙ'
                autoSize={{ minRows: 3 }}
              />
            </Form.Item>
          </div>
        ) : null}

        {/* ЗАПАСНЫЕ ЧАСТИ*/}
        <Form.Item
          name='sparePart'
          label='ЗАПАСНЫЕ ЧАСТИ'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
        >
          <Radio.Group>
            <Radio value={true}>да</Radio>
            <Radio value={false}>Нет</Radio>
          </Radio.Group>
        </Form.Item>
        {/*Блок для описания ЗАПАСНЫЕ ЧАСТИ*/}
        <Form.Item
          name='DepsAndExtraRequirmentsForSparePart'
          label='ПЕРЕЧЕНЬ ЗАПЧАСТЕЙ И ДОПОЛНИТЕЛЬНЫЕ ТРЕБОВАНИЯ'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
            validationRules("min", "Минимум 2 сивола", 0, 2),
            validationRules("max", "Мксимум 1000 сиволов", 255, 0),
            validationRules("whitespace", "пустой пробел"),
          ]}
        >
          <TextArea
            showCount
            maxLength={255}
            placeholder='ПЕРЕЧЕНЬ ЗАПЧАСТЕЙ И ДОПОЛНИТЕЛЬНЫЕ ТРЕБОВАНИЯ О ЗАПАСНЫХ ЧАСТЯХ, ИЗГОТАВЛИВАЕМЫХ ПОСТАВЩИКОМ'
            autoSize={{ minRows: 3 }}
          />
        </Form.Item>

        {/* ГАРАНТИЙНЫЙ ПЕРИОД*/}
        <Form.Item
          name='esure'
          label='ГАРАНТИЯ'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
        >
          <Radio.Group>
            <Radio value={true}>да</Radio>
            <Radio value={false}>Нет</Radio>
          </Radio.Group>
        </Form.Item>
        {/*Блок для описания ГАРАНТИЙНЫЙ ПЕРИОД*/}
        <Form.Item
          name='ensurePeriod'
          label='ГАРАНТИЙНЫЙ ПЕРИОД'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
            validationRules("min", "Минимум 2 сивола", 0, 2),
            validationRules("max", "Мксимум 1000 сиволов", 500, 0),
            validationRules("whitespace", "пустой пробел"),
          ]}
        >
          <TextArea
            showCount
            maxLength={500}
            placeholder='Укажите период гарантии выраженный в часах работы или месяцев со дня приёмки товара'
            autoSize={{ minRows: 3 }}
          />
        </Form.Item>
        <Form.Item
          name='provideRedressPeriod'
          label='ОБЕСПЕЧИТЬ ИСПРАВЛЕНИЕ'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
            validationRules("min", "Минимум 2 сивола", 0, 2),
            validationRules("max", "Мксимум 1000 сиволов", 500, 0),
            validationRules("whitespace", "пустой пробел"),
          ]}
        >
          <Input placeholder='Укажите кол-во дней, за которое поставщик должен исправить дефект или заменить товар' />
        </Form.Item>
        <Form.Item
          name='noMakedEnsureOughts'
          label='НЕУСТОЙКА ЗА НЕВЫПОЛНЕНИЕ ГАРАНТИЙНЫХ ОБЯЗАТЕЛЬСТВ'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
        >
          <Input
            type='number'
            placeholder='Введите в % за каждый день
            Ставка за каждый просроченный день'
            max={100}
            min={0}
            step={0.1}
          />
        </Form.Item>
        <Form.Item
          name='maximumDeductSum'
          label='МАКСИМАЛЬНО ВЫЧИТАЕМАЯ СУММА'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
        >
          <Input
            type='number'
            placeholder='Введите значение не превышающую 10% от цены контракта'
            max={10}
            min={0}
            step={0.1}
          />
        </Form.Item>
        {/* блок выбора документов */}

        {/* УРЕГУЛИРОВАНИЕ СПОРОВ*/}
        <Form.Item
          name='disputeControl'
          label='УРЕГУЛИРОВАНИЕ СПОРОВ'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
        >
          <Radio.Group>
            <Radio value={true}>Третейский суд</Radio>
            <Radio value={false}>
              Суд общей юрисдикции Кыргызской Республики
            </Radio>
          </Radio.Group>
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
