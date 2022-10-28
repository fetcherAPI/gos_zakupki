import React from "react";
import { useParams } from "react-router-dom";
type Props = {};

export const Invoice = (props: Props) => {
  let params = useParams();

  return <h1>Invoice privet</h1>;
};
