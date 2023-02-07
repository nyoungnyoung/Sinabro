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
    // isSelect: false,
    // SelectedMainNo: 1,
    subCategory: [
      {
        name: "",
        no: 1,
      },
    ],
    LectureCard: [
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
      state.LectureCard = action.payload;
    },
  },
});

export const { changeMain, changeSub, changeLecture } = mainSlice.actions;
export default mainSlice.reducer;
