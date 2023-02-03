import { createSlice } from "@reduxjs/toolkit";

const initialTeacherState = {
  tId: "",
  tPassword: "",
  tName: "",
  tBirth: "",
  tNumber: "",
  tCategory: "",
};

export const teacherSlice = createSlice({
  name: "teacher",
  initialState: initialTeacherState,
  reducers: {
    addTeacherId(state, action) {
      state.tId = action.payload;
    },
    addTeacherPassword(state, action) {
      state.tPassword = action.payload;
    },
    addTeacherName(state, action) {
      state.tName = action.payload;
    },
    addTeacherBirth(state, action) {
      state.tBirth = action.payload;
    },
    addTeacherNumber(state, action) {
      state.tNumber = action.payload;
    },
    addTeacherCategory(state, action) {
      state.tCategory = action.payload;
    },
  },
});

export const teacherActions = teacherSlice.actions;

export default teacherSlice.reducer;
