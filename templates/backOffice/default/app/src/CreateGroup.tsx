import "./styles/index.css";

import { Provider } from "react-redux";

import Menu from "./components/Menu";
import Group from "./components/Group";
import React from "react";
import store from "./redux/store";

export default function TheliaBlocks() {
  return (
    <Provider store={store}>
      <div className="App">
        <Group />
        <Menu />
      </div>
    </Provider>
  );
}
