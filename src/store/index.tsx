import { configureStore } from "@reduxjs/toolkit";

import searchFieldReducer from "./searchField";
import authFieldReducer from "./authField";

const store = configureStore({
  reducer: {
    searchField: searchFieldReducer,
    authentication: authFieldReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
