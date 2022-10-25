import classes from "./Haeder.module.scss";
import closeSvg from "../../../../assets/img/closeBtn.svg";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { logOut } from "../../../../state/slices/ActionCreators";
import { RouteNames } from "../../../../routes";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>
        <span>Портал</span> ГосЗакупок
      </h1>
      <Link
        to={RouteNames.LOGIN}
        className={classes.btn}
        onClick={() => logOut()(dispatch)}
      >
        <img src={closeSvg} alt='' />
      </Link>
    </div>
  );
};

export default Header;
