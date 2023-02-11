import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loginInfo: { id: "", password: "" },
    loginAccess: { accessToken: "", refreshToken: "" },
    findId: { phone: "", authNum: "", inputNum: "", id: "" },
    findPw: { phone: "", authNum: "", inputNum: "", newPw: "" },
  },
  reducers: {
    login: (state, action) => {
      state.loginInfo = action.payload;
    },
    // loginPw: (state, action) => {
    //   state = action.payload;
    // },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
