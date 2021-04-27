import blocksReducer from "./blocks";
import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "./group";
import uiReducer from "./ui";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    group: groupReducer,
    blocks: blocksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
