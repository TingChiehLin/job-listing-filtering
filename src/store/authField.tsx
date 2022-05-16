import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state: any) {},
    logout(state: any) {},
  },
});

export const authenticationActions = authSlice.actions;

export default authSlice.reducer;
