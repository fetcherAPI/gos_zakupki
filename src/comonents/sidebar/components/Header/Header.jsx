import classes from "./Haeder.module.scss";
import closeSvg from "../../../../assets/img/closeBtn.svg";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../../../../state/slices/AuthSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("authentication");
    console.log("logiout");
    dispatch(setIsAuth(false));
  };

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>
        <span>Портал</span> ГосЗакупок
      </h1>
      <Link to={"/login"} className={classes.btn} onClick={() => logout()}>
        <img src={closeSvg} alt='' />
      </Link>
    </div>
  );
};

export default Header;
