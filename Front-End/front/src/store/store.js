import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import userSlice from "./userSlice";
import SignUpSlice from "./SignUpSlice";
import TeacherSlice from "./TeacherSlice";
// import detailSlice from "./detailSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    user: userSlice,
    signUp: SignUpSlice,
    teacher: TeacherSlice,
    // detail: detailSlice,
  },
});
