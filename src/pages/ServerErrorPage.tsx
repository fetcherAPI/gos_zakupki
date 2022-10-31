import React, { useEffect } from "react";

type Props = {};

const ServerErrorPage = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      window.location.assign("/login");
    }, 5000);
  });
  return <div>Сервер не отвечает вы будите перенапрвленны</div>;
};

export default ServerErrorPage;
