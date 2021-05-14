import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { uiStoreType } from "../types";

export let initialState: uiStoreType = {
  isUnsaved: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setUnsaved(state, action: PayloadAction<boolean>) {
      state.isUnsaved = action.payload;
    },
  },
});

export const { setUnsaved } = uiSlice.actions;

export default uiSlice.reducer;
