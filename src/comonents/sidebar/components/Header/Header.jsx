import classes from "./Haeder.module.scss";
import closeSvg from "../../../../assets/img/closeBtn.svg";
const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>
        <span>Портал</span> ГосЗакупок
      </h1>
      <button className={classes.btn}>
        <img src={closeSvg} alt='' />
      </button>
    </div>
  );
};

export default Header;
