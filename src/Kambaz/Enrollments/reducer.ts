import { createSlice } from "@reduxjs/toolkit";
// import { enrollments } from "../Database";
// import { v4 as uuidv4 } from "uuid";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

const initialState: { enrollments: Enrollment[] } = {
  enrollments:  [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollStudent: (state, { payload }: { payload: Enrollment }) => {
      // Add enrollment if not already enrolled
      if (!state.enrollments.some((e: Enrollment) => e.user === payload.user && e.course === payload.course)) {
        // state.enrollments.push({ _id: uuidv4(), user: payload.user, course: payload.course });
        state.enrollments.push(payload);
      }
    },
    unenrollStudent: (state, { payload }: { payload: Enrollment }) => {
      // Remove enrollment
      state.enrollments = state.enrollments.filter((e: Enrollment) => !(e.user === payload.user && e.course === payload.course));
    },
    setEnrollments: (state, { payload }: { payload: Enrollment[] }) => {
      state.enrollments = payload;
    }

  }
});

export const { enrollStudent, unenrollStudent,setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;