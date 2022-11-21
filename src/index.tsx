import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Global from "./styles/Global";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Global />
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
