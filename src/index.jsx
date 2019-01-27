import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import Store from "./store";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

// ReactDOM.render(<App store={new Store()} />, window.document.getElementById("root"));
ReactDOM.render(
  <Provider rootStore={new Store()}>
    <App />
  </Provider>,
  window.document.getElementById("root"),
);
