import React, { useState } from "react";
import classes from "./Settings.module.scss";
type Props = {};

export const MyDocuments = (props: Props) => {
  const [sekectedFile, setSelectedFile] = useState();
  const handleChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
    console.log("e.target.value", e.target.files);
  };
  console.log("sekectedFiles", sekectedFile);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p>Загрузите документ для дальнейшего использования его в системе</p>
      <label className={classes.label}>
        Загрузить
        <input type='file' onChange={(e) => handleChange(e)} />
      </label>
    </div>
  );
};
