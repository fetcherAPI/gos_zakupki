import Header from "./components/Header";
import ListItem from "./components/ListItem";
import classes from "./Sidebar.module.scss";
import { mySvg } from "../../assets/img/export";
import { useEffect } from "react";
import { checkRefreshToken } from "../../state/slices/ActionCreators";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";

const Sidebar = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    checkRefreshToken()(dispatch);
  }, []);
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
