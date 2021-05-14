import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { uiStoreType } from "../types";

export let initialState: uiStoreType = {
  isUnsaved: false,
  windowConstants: {
    groupId: undefined,
    itemId: undefined,
    itemType: undefined,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setUnsaved(state, action: PayloadAction<boolean>) {
      state.isUnsaved = action.payload;
    },
    setWindowConstants(state, action: PayloadAction<{ [key: string]: any }>) {
      state.windowConstants = action.payload;
    },
    initializeWindowConstantsGroupId(state) {
      state.windowConstants = {
        ...state.windowConstants,
        groupId: initialState.windowConstants.groupId,
      };
    }
  },
});

export const { setUnsaved, setWindowConstants, initializeWindowConstantsGroupId } = uiSlice.actions;

export default uiSlice.reducer;
