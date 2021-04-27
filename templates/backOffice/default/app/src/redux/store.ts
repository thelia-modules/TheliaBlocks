import blocksReducer from "./blocks";
import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "./group";

const store = configureStore({
  reducer: {
    group: groupReducer,
    blocks: blocksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
