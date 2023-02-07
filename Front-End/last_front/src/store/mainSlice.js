import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    mainCategory: [
      {
        name: "모든강의",
        no: 1,
      },
    ],
    mainNo: "0",
    subCategory: [
      {
        name: "",
        no: 1,
      },
    ],
    lectureCard: [
      {
        no: 0,
        subject: "",
        startDate: "",
        endDate: "",
        content: "",
        savedName: "",
      },
    ],
    // MyPageCard: [
    //   {
    //     no: 0,
    //     subject: "",
    //     startDate: "",
    //     endDate: "",
    //     content: "",
    //     savedName: "",
    //   },
    // ],
  },
  reducers: {
    changeMain: (state, action) => {
      state.mainCategory = action.payload;
    },
    changeSub: (state, action) => {
      state.subCategory = action.payload;
    },
    changeLecture: (state, action) => {
      state.lectureCard = action.payload;
    },
    changeMainNo: (state, action) => {
      state.mainNo = action.payload;
    },
  },
});

export const { changeMain, changeSub, changeLecture, changeMainNo } =
  mainSlice.actions;
export default mainSlice.reducer;
