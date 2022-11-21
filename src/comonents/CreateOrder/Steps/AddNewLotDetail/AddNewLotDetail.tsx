import { Form, Button, Input, Upload } from "antd";
import { validationRules } from "../AddNewLot/validationShcema";
import classes from "./AddNewLotDetail.module.scss";

type Props = {};

export const AddNewLotDetail = (props: Props) => {
  const { TextArea } = Input;
  return (
    <div>
      <div className={classes.lot_info_block}>
        <h1 className={classes.header}>Информация о лоте</h1>
        <hr />
        <div className={classes.lot_info_table}>
          <div className={classes.lot_info_column}>
            <div className={classes.lot_info_row}>
              <span>Наименование лота</span>
              <p>data from back</p>
            </div>
            <div className={classes.lot_info_row}>
              <span>План закупок</span>
              <p>data from back</p>
            </div>
            <div className={classes.lot_info_row}>
              <span>Сроки поставки товара</span>
              <p>data from back</p>
            </div>
            <div className={classes.lot_info_row}>
              <span>Для резидентов Кыргызской Республики</span>
              <p>data from back</p>
            </div>
            <div className={classes.lot_info_row}>
              <span>Сумма</span>
              <p>data from back</p>
            </div>
          </div>
          <div className={classes.lot_info_column}>
            <div className={classes.lot_info_row}>
              <span>Общий Класификатор Государственных Закупок</span>
              <p>data from back</p>
            </div>
            <div className={classes.lot_info_row}>
              <span>Адрес и Место поставки</span>
              <p>data from back</p>
            </div>
            <div className={classes.lot_info_row}>
              <span>Условие поставки:</span>
              <p>data from back</p>
            </div>
            <div className={classes.lot_info_row}>
              <span>Для нерезидентов Кыргызской Республики</span>
              <p>data from back</p>
            </div>
            <div className={classes.lot_info_row}>
              <Button type='primary'>Редактировать</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.forming_lot_block}>
        <h1 className={classes.header}>Формирование перечня товаров в лоте</h1>
        <Form
          autoComplete='off'
          className={classes.lot_form}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <div>
            <p>Наименование продукта</p>
            <Form.Item
              name='lotName'
              rules={[
                validationRules("required", "Поле  обязательно для заполнения"),
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
          </div>

          <Form.Item
            name='Place'
            label='АДРЕС И МЕСТО ПОСТАВКИ'
            rules={[
              validationRules("required", "Поле обязательно для заполнения"),
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
              validationRules("required", "Поле обязательно для заполнения"),
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
              validationRules("required", "Поле обязательно для заполнения"),
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

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type='primary' htmlType='submit'>
              Добавить детали лота
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
