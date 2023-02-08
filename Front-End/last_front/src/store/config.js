import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";
import loginSlice from "./loginSlice";
import detailSlice from "./detailSlice";

export const store = configureStore({
  reducer: {
    main: mainSlice,
    login: loginSlice,
    detail: detailSlice,
  },
});
