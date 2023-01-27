import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
// import detailSlice from "./detailSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    // detail: detailSlice,
  },
});
