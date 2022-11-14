import React, { useEffect, useState } from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";
import { utilControllerService } from "../../services/utilContollerService";

const handleChange = (value: string | string[]) => {
  console.log(`Selected: ${value}`);
};

type Props = {};

const DocumnetSelector = (props: Props) => {
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    utilControllerService.getListOfLotsDocumnets().then((res) => {
      setOptions(res.data);
    });
  }, []);
  console.log("options", options);
  return (
    <Select
      mode='tags'
      placeholder='Выбрать документы'
      onChange={handleChange}
      style={{ width: "100%" }}
      options={options}
    />
  );
};

export default DocumnetSelector;
