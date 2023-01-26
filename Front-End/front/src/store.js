import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./pages/main/categorySlice";

export const store = configureStore({
    reducer: {
        category: categorySlice,
    },
})