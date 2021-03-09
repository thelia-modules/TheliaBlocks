import React from "react";
import ReactDOM from "react-dom";
import TheliaBlocks from "../lib/main";
import blockVideo from "./plugins/Video";
import { registerPlugin } from "../lib/pluginManager";

registerPlugin(blockVideo);

ReactDOM.render(
  <React.StrictMode>
    <TheliaBlocks />
  </React.StrictMode>,
  document.getElementById("root")
);
