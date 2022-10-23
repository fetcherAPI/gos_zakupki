import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../../state/slices/AuthSlice";
import classes from "./Login.module.scss";
import AuthService from "../../services/AuthService";
import USER_ROLES from "../../typescript/enums/userRoles";

const Login = () => {
  const dispatch = useDispatch();

  const login = async (username: string, password: string) => {
    try {
      const res = await AuthService.login(username, password);
      localStorage.setItem("Authorization", res.data.token);
      return res;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  type Error = {
    username?: string;
    password?: string;
  };
  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors: Error = {};
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
