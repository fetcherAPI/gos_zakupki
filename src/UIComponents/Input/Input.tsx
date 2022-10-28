import React from "react";
import classes from "./Input.module.scss";

type Props = {
  title: string;
  type: string;
};

export const Input = ({ title, type }: Props) => {
  return (
    <div>
      <p className={classes.input_title}>{title}</p>
      <input type={type} className={classes.input} />
    </div>
  );
};
