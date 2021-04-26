import "./styles/index.css";

import {
  NumberParam,
  QueryParamProvider,
  useQueryParam,
} from "use-query-params";
import { Provider, useDispatch } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import Menu from "./components/Menu";
import Page from "./components/Page";
import React from "react";
import { setBlocks } from "./redux/blocks";
import store from "./redux/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

export default function TheliaBlocks() {
  return (
    <QueryParamProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <div className="App">
            <Page />
            <Menu />
          </div>
        </Provider>
      </QueryClientProvider>
    </QueryParamProvider>
  );
}
