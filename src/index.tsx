import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./state/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./comonents/login";
import { URLS_PTH } from "./typescript/urlPath/urlsPath";
// import { Invoice } from "./comonents/Invoice/Invoice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path={URLS_PTH.LOGIN} element={<Login />} />
          {/* <Route path='invoices/:invoiceId' element={<Invoice />} /> */}
        </Routes>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
