import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { uiStoreType } from "../types";

export let initialState: uiStoreType = {
  isDirty: false,
};

const uiSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setDirty(state, action: PayloadAction<boolean>) {
      state.isDirty = action.payload;
    },
  },
});

export const { setDirty } = uiSlice.actions;

export default uiSlice.reducer;
