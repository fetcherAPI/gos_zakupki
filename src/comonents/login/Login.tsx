import { useEffect, useState } from "react";
import authenticateUser, { IUserData } from "../../api/authenticateService";
// import axios from "axios";
import { Formik } from "formik";
import classes from "./Login.module.scss";

type Props = {};
type Errors = {
  username?: string;
  password?: string;
};

const Login = () => {
  const [data, setData] = useState<IUserData>({
    username: "",
    password: "",
  });

  useEffect(() => {
    authenticateUser(data);
  }, []);

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors: Errors = {};
          if (!values.username) {
            errors.username = "Required";
          } else if (!values.password) {
            errors.password = "password is Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values));
          setData(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <label
              htmlFor='
            '
              className={errors.username && classes.labelError}
            >
              <input
                type='text'
                name='username'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username && <p>{errors.username}</p>}
            </label>
            <label
              htmlFor='
            '
              className={errors.password && classes.labelError}
            >
              <input
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && <p>{errors.password}</p>}
            </label>

            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Login;
