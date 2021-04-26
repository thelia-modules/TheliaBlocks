import "vite/dynamic-import-polyfill";

import { Link, Route, HashRouter as Router, Switch } from "react-router-dom";

import CreateBlockGroup from "./CreateBlockGroup";
import ListBlockGroups from "./ListBlockGroups";
import React from "react";
import ReactDOM from "react-dom";
import blockVideo from "./blocks/Video";
import { registerPlugin } from "./pluginManager";

registerPlugin(blockVideo);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Link to="/">list</Link>
        <Link to="/create">create</Link>
      </div>
      <Switch>
        <Route path="/create">
          <CreateBlockGroup />
        </Route>
        <Route path="/">
          <ListBlockGroups />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("thelia-blocks-root")
);
