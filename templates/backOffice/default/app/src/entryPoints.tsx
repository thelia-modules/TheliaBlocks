import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Route, HashRouter as Router, Switch } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

import store from "./redux/store";
import { setWindowConstants } from "./redux/ui";
import EditGroup from "./pages/EditGroup";
import ListGroups from "./pages/ListGroups";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {children}
        <ToastContainer autoClose={3000} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

export const Dashboard = () => (
  <Wrapper>
    <Router>
      <div className="px-4">
        <div className="">
          <Link to="/" className="px-5 py-3 mr-4 font-bold bg-white">
            Liste des groupes de blocs
          </Link>
          <Link
            to="/create"
            className="px-5 py-3 font-bold text-white bg-yellow-500"
          >
            Ajouter un groupe de blocs
          </Link>
        </div>
        <div className="mt-8">
          <Switch>
            <Route
              path="/edit/:id"
              render={({
                match: {
                  params: { id },
                },
              }) => <EditGroup id={parseInt(id, 10)} />}
            ></Route>
            <Route path="/create">
              <EditGroup />
            </Route>
            <Route path="/">
              <ListGroups />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </Wrapper>
);

declare const window: {
    itemId: number,
    itemType: string,
    groupId: number|null,
};

const EditPageInner = () => {
  const dispatch = useDispatch();

  if (window.itemId && window.itemType) {
    dispatch(
      setWindowConstants({
        groupId: window.groupId,
        itemId: window.itemId,
        itemType: window.itemType,
      })
    );
  }

  return <EditGroup />;
};

export const EditPage = () => {
  return (
    <Wrapper>
      <EditPageInner />
    </Wrapper>
  );
};
