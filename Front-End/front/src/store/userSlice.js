import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loginInfo: { id: "", password: "" },
    loginAccess: { accessToken: "", refreshToken: "" },
    findIdInfo: { phone: "", authNum: "", inputNum: "", id: "" },
    findPwInfo: { phone: "", authNum: "", inputNum: "", newPw: "" },
  },
  reducers: {
    login: (state, action) => {
      state.loginInfo = action.payload;
    },
    findId: (state, action) => {
      state.findIdInfo = action.payload;
    },
    findPw: (state, action) => {
      state.findPwInfo = action.payload;
    },
  },
});

export const { login, findId, findPw } = userSlice.actions;

export default userSlice.reducer;
