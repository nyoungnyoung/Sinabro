import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  password: "",
  password2: "",
  name: "",
  birth: "",
  phone: "",
  agree: false,
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    addId(state, action) {
      state.id = action.payload;
    },
    addPw(state, action) {
      state.password = action.payload;
    },
    addPw2(state, action) {
      state.password2 = action.payload;
    },
    addName(state, action) {
      state.name = action.payload;
    },
    addBirth(state, action) {
      state.birth = action.payload;
    },
    addPhone(state, action) {
      state.phone = action.payload;
    },
    changeAgree(state) {
      state.agree = !state.agree;
    },
  },
});

export const signUpActions = signUpSlice.actions;

export default signUpSlice.reducer;
