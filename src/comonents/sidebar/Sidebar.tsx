import { useEffect } from "react";
import { checkRefreshToken } from "../../state/slices/ActionCreators";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import ServerErrorPage from "../../pages/ServerErrorPage";
import classes from "./Sidebar.module.scss";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import { mySvg } from "../../assets/img/export";

const Sidebar = () => {
  const dispatch: AppDispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  // useEffect(() => {
  //   checkRefreshToken()(dispatch);
  // }, []);
  if (error === "Network Error") {
    return <ServerErrorPage />;
  }
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
