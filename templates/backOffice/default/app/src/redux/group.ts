import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { GroupTypeStore } from "../types";
import slugify from "../utils/slugify";

export let initialState: GroupTypeStore = {
  title: "",
  visible: true,
  slug: "",
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setGroup(state, action: PayloadAction<GroupTypeStore>) {
      return action.payload;
    },
    setGroupTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setGroupSlug(state, action: PayloadAction<string>) {
      state.slug = slugify(action.payload);
    },
    setGroupVisible(state, action: PayloadAction<boolean>) {
      state.visible = action.payload;
    },
  },
});

export const { setGroup, setGroupTitle, setGroupSlug, setGroupVisible } = groupSlice.actions;

export default groupSlice.reducer;
