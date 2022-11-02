import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Field, Form, Formik } from "formik";
import classes from "./Steps.module.scss";

const OrganizationInfo = () => {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [orderName, setOrderName] = React.useState<string>("");

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <div>
      <Formik
        initialValues={{
          toggle: false,
          checked: [],
          date: null,
          orderName: "",
        }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({ values }) => (
          <Form className={classes.form}>
            <div className={classes.item}>
              <p className={classes.title}>название закупки</p>
              <div className={classes.content}>
                <textarea
                  className={classes.texarea}
                  required
                  onChange={(e) => setOrderName(e.target.value)}
                />
              </div>
            </div>

            <div className={classes.item}>
              <p className={classes.title}>Сроки</p>
              <div className={classes.content}>
                <label className={classes.date_picker}>
                  <p>Срок подачи предложений поставщиков</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label='Date desktop'
                      inputFormat='MM/DD/YYYY'
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => (
                        <TextField
                          required={true}
                          name='date'
                          {...params}
                          size='small'
                        />
                      )}
                    />
                  </LocalizationProvider>
                </label>

                <label>
                  <p>Срок действия предложений поставщиков</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label='Date desktop'
                      inputFormat='MM/DD/YYYY'
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => (
                        <TextField
                          required={true}
                          name='date'
                          {...params}
                          size='small'
                        />
                      )}
                    />
                  </LocalizationProvider>
                </label>
              </div>
            </div>

            <div className={classes.item}>
              <p className={classes.title}>
                Валюта предложения <br /> поставщика
              </p>

              <div className={classes.content}>
                <div id='checkbox-group'></div>
                <div
                  role='group'
                  aria-labelledby='checkbox-group'
                  className={classes.checkboxes}
                >
                  <label>
                    <p>Кыргызский сом</p>

                    <Field type='checkbox' name='checked' value='SOM' />
                  </label>

                  <label>
                    <p>Другая валюта</p>

                    <Field
                      type='checkbox'
                      name='checked'
                      value='OTHTER_CURRENCY'
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className={classes.item}>
              <p className={classes.title}>
                Гарантийное обеспечение <br />
                предложения поставщика
              </p>

              <div className={classes.content}>
                <div id='checkbox-group'></div>
                <div
                  role='group'
                  aria-labelledby='checkbox-group'
                  className={classes.checkboxes}
                >
                  <label>
                    <p>Да</p>

                    <Field type='checkbox' name='checked' value='True' />
                  </label>

                  <label>
                    <p>Нет</p>

                    <Field type='checkbox' name='checked' value='False' />
                  </label>
                </div>
              </div>
            </div>

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrganizationInfo;
