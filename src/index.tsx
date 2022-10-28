import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { AppRouter } from "./routes/AppRouter";
import Box from "@mui/material/Box";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import Sidebar from "./comonents/sidebar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter basename='/sopp'>
    <Provider store={store}>
      <React.StrictMode>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <AppRouter />
          </Box>
        </Box>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
