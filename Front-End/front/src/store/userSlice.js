import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loginInfo: { id: "", password: "" },
    loginAccess: { accessToken: "", refreshToken: "" },
<<<<<<< HEAD
    findId: { phone: "", authNum: "", inputNum: "", id: "" },
    findPw: { phone: "", authNum: "", inputNum: "", newPw: "" },
=======
    findIdInfo: { phone: "", authNum: "", inputNum: "", id: "" },
    findPwInfo: { phone: "", authNum: "", inputNum: "", newPw: "" },
>>>>>>> dev-BE
  },
  reducers: {
    login: (state, action) => {
      state.loginInfo = action.payload;
    },
<<<<<<< HEAD
    // loginPw: (state, action) => {
    //   state = action.payload;
    // },
  },
});

export const { login } = userSlice.actions;
=======
    findId: (state, action) => {
      state.findIdInfo = action.payload;
    },
    findPw: (state, action) => {
      state.findPwInfo = action.payload;
    },
  },
});

export const { login, findId, findPw } = userSlice.actions;
>>>>>>> dev-BE

export default userSlice.reducer;
