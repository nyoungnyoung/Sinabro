import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    lectureData: [
      {
        content: "",
        endDate: "",
        isEnrolled: false,
        lectureTimeList: [
          {
            day: 0,
            runTime: "",
            startTime: "",
          },
        ],
        name: "",
        no: 0,
        savedName: "",
        startDate: "",
        subject: "",
      },
    ],
  },
  reducers: {
    changeLecture: (state, action) => {
      state.lectureData = action.payload;
    },
  },
});

export const { changeLecture } = detailSlice.actions;
export default detailSlice.reducer;
