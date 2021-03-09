import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { PageType } from "../types";

export let initialState = {
  title: "",
} as PageType;

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPageTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export const { setPageTitle } = pageSlice.actions;

export default pageSlice.reducer;
