import Header from "./components/Header";
import ListItem from "./components/ListItem";
import classes from "./Sidebar.module.scss";
import { mySvg } from "../../assets/img/export";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Header />

      <ul className={classes.list}>
        <ListItem svgUrl={mySvg} text='gjkgfkl' />
      </ul>
    </div>
  );
};

export default Sidebar;
