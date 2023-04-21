import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

import Router from "./routes/router.jsx";
import { store } from "./store/store.jsx";
import { Provider } from "react-redux";
import GlobalStyle from "./utils/GlobalStyles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <Router />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
