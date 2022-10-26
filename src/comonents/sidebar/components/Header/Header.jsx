import classes from "./Haeder.module.scss";
import closeSvg from "../../../../assets/img/closeBtn.svg";
import { Link } from "react-router-dom";

import { RouteNames } from "../../../../routes";
const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>
        <span>Портал</span> ГосЗакупок
      </h1>
      <Link to={RouteNames.MAIN} className={classes.btn}>
        <img src={closeSvg} alt='' />
      </Link>
    </div>
  );
};

export default Header;
