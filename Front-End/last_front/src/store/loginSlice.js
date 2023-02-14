import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") == null ? "": JSON.parse(localStorage.getItem("token")),
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    logOut(state, action) {
      state.token = "";
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
