import React from "react";
import classes from "./Input.module.scss";

type Props = {
  title: string;
  placeholder: string;
  type: string;
  value: string;
};

export const Input = ({ title, placeholder, type, value }: Props) => {
  return (
    <label className={classes.input_label}>
      {title}
      <input
        type={type}
        placeholder={placeholder}
        className={classes.input}
        value={value}
      />
    </label>
  );
};
