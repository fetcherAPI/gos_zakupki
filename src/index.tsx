import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./state/store";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter basename='/sopp'>
    <Provider store={store}>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
