import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const searchSlice = createSlice({
  name: "searchField",
  initialState,
  reducers: {
    searchFieldTextHandler(state: any, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const searchFieldActions = searchSlice.actions;

export default searchSlice.reducer;
