import blocksReducer from "./blocks";
import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./page";

const store = configureStore({
  reducer: {
    page: pageReducer,
    blocks: blocksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
