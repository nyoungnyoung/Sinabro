import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addToken(state, action) {
      state.token = action.payload;
    },
    logOut(state, action) {
      state.token = "";
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
