import React, { useEffect } from "react";

type Props = {};

const Gotologin = (props: Props) => {
  useEffect(() => {
    window.location.assign("/login");
  });
  return <div>Gotologin</div>;
};

export default Gotologin;
