import Header from "./components/Header";
import ListItem from "./components/ListItem";
import classes from "./Sidebar.module.scss";
import { mySvg } from "../../assets/img/export";
import { useDispatch } from "react-redux";
import { checkAuth } from "../../state/slices/AuthSlice";
import { AppDispatch } from "../../state/store";

const Sidebar = () => {
  const dispatch: AppDispatch = useDispatch();
  dispatch(checkAuth());
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
