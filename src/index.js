import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
/* Configurations */
import configureStore from "./services/store";
/* Styles */
import "normalize.css";
import "./styles/globalStyle";
/* Components */
import App from "./components/App";

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
