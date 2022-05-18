import { createSlice } from "@reduxjs/toolkit";
import Tag from "../models/Tag.model";

interface TagFieldSlice {
  tags: Tag[];
}

const initialState: TagFieldSlice = {
  tags: [],
};

const tagSlice = createSlice({
  name: "tagField",
  initialState,
  reducers: {
    resetTagHandler(state: any) {
      state.tags = [];
    },
  },
});

export const tagFieldActions = tagSlice.actions;

export default tagSlice.reducer;
