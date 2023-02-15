import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import userSlice from "./userSlice";
import SignUpSlice from "./SignUpSlice";
// import detailSlice from "./detailSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    user: userSlice,
    signUp: SignUpSlice,
    // detail: detailSlice,
  },
});
