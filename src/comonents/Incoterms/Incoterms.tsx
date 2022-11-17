import React, { ReactNode, useEffect, useState } from "react";
import { IncotermType } from "../../api_swagger/models/Incoterm";
import { utilControllerService } from "../../services/utilContollerService";
import { Form, Button, Input, Select, Upload } from "antd";
type Props = {};

export const Incoterms = (props: Props) => {
  const [incoterm, setIncoterm] = useState<IncotermType[]>([]);
  useEffect(() => {
    utilControllerService
      .getListOfIncoterm()
      .then((res) => setIncoterm(res.data));
  }, []);

  const incotermSelectItems = incoterm.map((el: IncotermType): ReactNode => {
    return (
      <Select.Option key={el.data} value={el.data}>
        {el.title}
      </Select.Option>
    );
  });

  return <Select placeholder=''>{incotermSelectItems}</Select>;
};
