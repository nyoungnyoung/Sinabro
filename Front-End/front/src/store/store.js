import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import userSlice from "./userSlice";
<<<<<<< HEAD
import SignUpSlice from "./SignUpSlice";
=======
>>>>>>> dev-BE
// import detailSlice from "./detailSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    user: userSlice,
<<<<<<< HEAD
    signUp: SignUpSlice,
=======
>>>>>>> dev-BE
    // detail: detailSlice,
  },
});
