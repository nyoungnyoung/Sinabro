import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";
import loginSlice from "./loginSlice";

export const store = configureStore({
  reducer: {
    main: mainSlice,
    login: loginSlice,
  },
});
