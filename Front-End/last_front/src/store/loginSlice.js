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
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
