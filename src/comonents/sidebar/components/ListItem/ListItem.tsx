import React from "react";
import classes from "./ListItem.module.scss";
type Props = {
  svgUrl: string;
  text: string;
};

const ListItem = ({ svgUrl, text }: Props) => {
  return (
    <div className={classes.item}>
      <img src={svgUrl} alt='icon' />
      <p>{text}</p>
    </div>
  );
};

export default ListItem;
