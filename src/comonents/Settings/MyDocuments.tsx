import React, {ChangeEvent, useState} from "react";
import classes from "./Settings.module.scss";

type Props = {};

export const MyDocuments = (props: Props) => {
    const [selectedFile, setSelectedFile] = useState();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setSelectedFile(e.target.files[0]);
    };

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <p>Загрузите документ для дальнейшего использования его в системе</p>
            <label className={classes.label}>
                Загрузить
                <input required={true} type='file' onChange={handleChange}/>
            </label>
        </div>
    );
};
