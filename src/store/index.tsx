import { configureStore } from "@reduxjs/toolkit";

import searchFieldReducer from "./searchField";
import authFieldReducer from "./authField";
import tagFieldReducer from "./tagField";

const store = configureStore({
  reducer: {
    searchField: searchFieldReducer,
    authentication: authFieldReducer,
    tagField: tagFieldReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
