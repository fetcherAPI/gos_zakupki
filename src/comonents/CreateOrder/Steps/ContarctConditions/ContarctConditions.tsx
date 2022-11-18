import { validationRules } from "../AddNewLot/validationShcema";
import { Form, Button, DatePicker, Input, Radio } from "antd";
import { Incoterms } from "../../../Incoterms";
import { useAppDispatch, useAppSelector } from "../../../../hook/reduxHooks";
import {
  setContractConditions,
  setTechnicalControl,
  setSparePart,
  setEnsure,
  setContractProject,
} from "../../../../state/slices/ContarctConditionsSlice";
import { UploadOutlined, CloseOutlined } from "@ant-design/icons";
import classes from "./ContarctConditions.module.scss";
import styles from "../Steps.module.scss";

export const ContarctConditions = () => {
  const dispatch = useAppDispatch();
  const { contractConditions } = useAppSelector(
    (state) => state.contractConditions
  );
  const { technicalControl, sparePart, ensure, contractProject } =
    contractConditions[0];
  const { TextArea } = Input;

  const buttonItemLayout = {
    wrapperCol: { span: 26, align: "end" },
  };

  return (
    <div>
      <Form
        className={classes.form__wrapper}
        autoComplete='off'
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
          className={classes.form__item}
          label={"ГАРАНТИЙНОЕ ОБЕСПЕЧЕНИЕ ИСПОЛНЕНИЯ КОНТРАКТА"}
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
          <Radio.Group
            onChange={(e) => {
              dispatch(setTechnicalControl(e.target.value));
            }}
          >
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
          <Radio.Group
            onChange={(e) => {
              dispatch(setSparePart(e.target.value));
            }}
          >
            <Radio value={true}>да</Radio>
            <Radio value={false}>Нет</Radio>
          </Radio.Group>
        </Form.Item>
        {/*Блок для описания ЗАПАСНЫЕ ЧАСТИ*/}
        {sparePart ? (
          <div>
            <Form.Item
              name='DepsAndExtraRequirmentsForSparePart'
              label='ПЕРЕЧЕНЬ ЗАПЧАСТЕЙ И ДОПОЛНИТЕЛЬНЫЕ ТРЕБОВАНИЯ'
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
                placeholder='ПЕРЕЧЕНЬ ЗАПЧАСТЕЙ И ДОПОЛНИТЕЛЬНЫЕ ТРЕБОВАНИЯ О ЗАПАСНЫХ ЧАСТЯХ, ИЗГОТАВЛИВАЕМЫХ ПОСТАВЩИКОМ'
                autoSize={{ minRows: 3 }}
              />
            </Form.Item>
          </div>
        ) : null}

        {/* ГАРАНТИЙНЫЙ ПЕРИОД*/}
        <Form.Item
          name='ensure'
          label='ГАРАНТИЯ'
          rules={[
            validationRules("required", "Это обязательное поле для заполнения"),
          ]}
        >
          <Radio.Group
            onChange={(e) => {
              dispatch(setEnsure(e.target.value));
            }}
          >
            <Radio value={true}>да</Radio>
            <Radio value={false}>Нет</Radio>
          </Radio.Group>
        </Form.Item>
        {/*Блок для описания ГАРАНТИЙНЫЙ ПЕРИОД*/}
        {ensure ? (
          <div>
            <Form.Item
              name='ensurePeriod'
              label='ГАРАНТИЙНЫЙ ПЕРИОД'
              rules={[
                validationRules(
                  "required",
                  "Это обязательное поле для заполнения"
                ),
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
                validationRules(
                  "required",
                  "Это обязательное поле для заполнения"
                ),
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
                validationRules(
                  "required",
                  "Это обязательное поле для заполнения"
                ),
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
                validationRules(
                  "required",
                  "Это обязательное поле для заполнения"
                ),
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
          </div>
        ) : null}

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
            <Radio value={"ARBITRAL_TRIBUNAL"}>Третейский суд</Radio>
            <Radio value={"KR_TRIBUNAL"}>
              Суд общей юрисдикции Кыргызской Республики
            </Radio>
          </Radio.Group>
        </Form.Item>

        {/* ПРОЕКТ КОНТРАКТА */}
        <Form.Item label='ПРОЕКТ КОНТРАКТА'>
          <label
            htmlFor='upload-first-photo'
            onChange={(e: any) =>
              dispatch(setContractProject(e.target.files[0]))
            }
          >
            <input
              style={{ display: "none" }}
              id='upload-first-photo'
              name='upload-first-photo'
              type='file'
            />
            <div className={styles.button_pick_img}>
              <UploadOutlined
                style={{
                  fontSize: "28px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
              Прикрепить
            </div>
          </label>
          {contractProject?.name && (
            <div className={classes.selected_file_name}>
              <span>{contractProject.name}</span>
              <CloseOutlined
                onClick={() => dispatch(setContractProject({}))}
                style={{
                  fontSize: "14px",
                  color: "red",
                  cursor: "pointer",
                }}
              />
            </div>
          )}
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button
            block
            type='primary'
            htmlType='submit'
            className={styles.save_btn}
          >
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
