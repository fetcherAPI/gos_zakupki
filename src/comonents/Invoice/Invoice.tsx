import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
type Props = {};

export const Invoice = (props: Props) => {
  let params = useParams();

  return <h1>Invoice {params.invoiceId}</h1>;
};
