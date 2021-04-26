import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { PageTypeStore } from "../types";
import slugify from "../utils/slugify";

export let initialState: PageTypeStore = {
  title: "",
  visible: true,
  slug: "",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<PageTypeStore>) {
      return action.payload;
    },
    setPageTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setPageSlug(state, action: PayloadAction<string>) {
      state.slug = slugify(action.payload);
    },
  },
});

export const { setPage, setPageTitle, setPageSlug } = pageSlice.actions;

export default pageSlice.reducer;
