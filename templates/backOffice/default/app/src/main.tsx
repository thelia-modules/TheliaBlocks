import "vite/dynamic-import-polyfill";

import { Link, Route, HashRouter as Router, Switch } from "react-router-dom";

import CreateBlockGroup from "./CreateBlockGroup";
import ListBlockGroups from "./ListBlockGroups";
import React from "react";
import ReactDOM from "react-dom";
import blockVideo from "./blocks/Video";

import { QueryClient, QueryClientProvider } from "react-query";

import { QueryParamProvider } from "use-query-params";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryParamProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div>
            <Link to="/" className="mr-4 btn btn-default">
              Liste des groupes de blocs
            </Link>
            <Link to="/create" className="btn btn-primary">
              Ajouter un groupe de blocs
            </Link>
          </div>
          <div className="mt-8">
            <Switch>
              <Route path="/edit/:id">Edit: TODO</Route>
              <Route path="/create">
                <CreateBlockGroup />
              </Route>
              <Route path="/">
                <ListBlockGroups />
              </Route>
            </Switch>
          </div>
        </Router>
      </QueryClientProvider>
    </QueryParamProvider>
  </React.StrictMode>,
  document.getElementById("thelia-blocks-root")
);
