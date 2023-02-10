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
    mainNo: "1",
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
        isEnrolled: false,
        lectureTimeList: [],
      },
    ],
    MyPageCard: [
      {
        no: 0,
        subject: "",
        startDate: "",
        endDate: "",
        content: "",
        savedName: "",
      },
    ],
    TeacherCard: [
      {
        no: 0,
        subject: "",
      },
    ],
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
    changeMyPage: (state, action) => {
      state.MyPageCard = action.payload;
    },
    changeTeacher: (state, action) => {
      state.MyPageCard = action.payload;
    },
    updateisEnrolled: state => {
      const Enrollstate = state.lectureCard.isEnrolled;
      const newCardData = { ...state, isEnrolled: !Enrollstate };
      state.lectureCard = newCardData;
    },
    updateLecture: (state, action) => {
      const Enrollstate = state.lectureCard[action.payload - 1].isEnrolled;
      state.lectureCard[action.payload - 1].isEnrolled = !Enrollstate;
      // const newCardData = {...state, state[action.payload].}
    },
  },
});

export const {
  changeMain,
  changeSub,
  changeLecture,
  changeMainNo,
  changeMyPage,
  changeTeacher,
  updateisEnrolled,
  updateLecture,
} = mainSlice.actions;
export default mainSlice.reducer;
