import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollStudent: (state, { payload }) => {
      // Add enrollment if not already enrolled
      if (!state.enrollments.some(e => e.user === payload.user && e.course === payload.course)) {
        state.enrollments.push({ _id: uuidv4(), user: payload.user, course: payload.course });
      }
    },
    unenrollStudent: (state, { payload }) => {
      // Remove enrollment
      state.enrollments = state.enrollments.filter(e => !(e.user === payload.user && e.course === payload.course));
    }
  }
});

export const { enrollStudent, unenrollStudent } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
