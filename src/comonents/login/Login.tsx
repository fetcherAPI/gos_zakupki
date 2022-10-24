import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setError, setIsAuth } from "../../state/slices/AuthSlice";
import classes from "./Login.module.scss";
import { authenticateUser } from "../../state/slices/AuthSlice";
import AuthService from "../../services/AuthService";
import USER_ROLES from "../../models/enums/userRoles";
import { RootState } from "../../state/store";

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth, error } = useSelector((state: RootState) => state.auth);
  const login = async (username: string, password: string) => {
    try {
      const res = await AuthService.login(username, password);
      localStorage.setItem("Authorization", res.data.token);
      if (
        res.data.role === USER_ROLES.PROCURING_ENTITY ||
        res.data.role === USER_ROLES.PROCURING_ENTITY_HEAD ||
        res.data.role === USER_ROLES.PROCURING_ENTITY_MANAGER
      ) {
        dispatch(setIsAuth(true));
      } else {
        throw new Error("Role is not correct");
      }
    } catch (error) {
      console.log("error", error);
      // dispatch(setError(error));
      return error;
    }
  };

  type Error = {
    username?: string;
    password?: string;
  };
  return (
    <>
      {error && <h1>error</h1>}
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
