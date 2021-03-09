import "./styles/index.css";

import { QueryClient, QueryClientProvider } from "react-query";

import Menu from "./components/Menu";
import Page from "./components/Page";
import { Provider } from "react-redux";
import React from "react";
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
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="App">
          <Page />
          <Menu />
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
