import { useEffect, useState } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import authenticateUser from "../../api/authenticateService";
import { loginValidate } from "../../utils/loginValidator";
import { UserData } from "../../typescript/types";
// import { setIsAuth } from "../../state/slices/AuthSlice";
// import { RootState } from "../../state/store";
import classes from "./Login.module.scss";

const Login = () => {
  const [data, setData] = useState<UserData>({
    username: "",
    password: "",
  });
  //   const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    authenticateUser(data);
  }, []);

  console.log(process.env.REACT_APP_KEY);

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => loginValidate(values)}
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
              {/* подсветка ошибки если есть */}
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
              {/* подсветка ошибки если есть */}
              {errors.password && touched.password && <p>{errors.password}</p>}
            </label>

            <button type='submit' disabled={isSubmitting}>
              войти
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Login;
