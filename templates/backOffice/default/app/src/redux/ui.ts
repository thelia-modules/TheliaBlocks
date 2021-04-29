import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import hash from 'object-hash';

import { GroupTypeResponse, uiStoreType } from "../types";

export let initialState: uiStoreType = {
  isUnsaved: false,
  hashSaved: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setUnsaved(state, action: PayloadAction<boolean>) {
      state.isUnsaved = action.payload;
    },
    setHashSaved(state, action: PayloadAction<GroupTypeResponse>) {
      state.hashSaved = hash(action.payload);
    },
  },
});

export const { setUnsaved, setHashSaved } = uiSlice.actions;

export default uiSlice.reducer;
