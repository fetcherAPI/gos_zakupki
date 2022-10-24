import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../../state/slices/AuthSlice";
import { LoginFormError } from "../../models/types";
import classes from "./Login.module.scss";
// import AuthService from "../../services/AuthService";
// import USER_ROLES from "../../models/enums/userRoles";
import { RootState, AppDispatch } from "../../state/store";

const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const { error, status } = useSelector((state: RootState) => state.auth);
  const login = async (username: string, password: string) => {
    dispatch(authenticateUser({ username, password }));
  };

  return (
    <>
      {status === "loading" ? <p>loading...</p> : null}
      {status === "rejected" ? <p>error...</p> : null}
      {error && <h1>error</h1>}
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors: LoginFormError = {};
          if (!values.username) {
            errors.username = "Required";
          } else if (!values.password) {
            errors.password = "password is Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            login(values.username, values.password);
            setSubmitting(false);
          });
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
          /* and other goodies */
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

            <button
              type='submit'
              disabled={isSubmitting}
              onClick={() => console.log("first")}
            >
              войти
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Login;
