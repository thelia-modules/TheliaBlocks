import "./styles/index.css";

import React from "react";

import { useGroup } from "./hooks/data";
import Menu from "./components/Menu";
import Group from "./components/Group";

export default function EditGroup() {
  useGroup();

  return (
    <div className="App">
      <Group />
      <Menu />
    </div>
  );
}
