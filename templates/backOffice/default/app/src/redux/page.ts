import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { PageType } from "../types";
import slugify from "../utils/slugify";

export let initialState: Omit<PageType, "jsonContent"> = {
  title: "",
  visible: true,
  slug: "",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPageTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setPageSlug(state, action: PayloadAction<string>) {
      state.slug = slugify(action.payload);
    },
  },
});

export const { setPageTitle, setPageSlug } = pageSlice.actions;

export default pageSlice.reducer;
