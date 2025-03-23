import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// import { assignments } from "../Database"; // Import initial assignments from Database

// ✅ 定义 Assignment 类型
interface Assignment {
  _id: string;
  course: string;
  title: string;
  description: string;
  points: number;
  due: string;
  availableFrom: string;
  availableUntil: string;
}

// const initialState: { assignments: Assignment[] } = {
//   assignments: [],
// };
const initialState: { assignments: Assignment[] } = {
  assignments: [
    {
      _id: "demo1",
      course: "RS101",
      title: "Assignment 1",
      description: "Test assignment for Rocket Propulsion",
      points: 100,
      due: "2025-04-15",
      availableFrom: "2025-04-01",
      availableUntil: "2025-04-30",
    },
  ],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      console.log("🔄 Setting assignments in Redux:", action.payload);
      state.assignments = action.payload;
    },
    addAssignment: (
      state,
      { payload }: { payload: Omit<Assignment, "_id"> }
    ) => {
      const newAssignment: Assignment = {
        _id: uuidv4(),
        title: payload.title,
        description: payload.description || "No description provided.",
        points: payload.points || 100,
        due: payload.due || "",
        availableFrom: payload.availableFrom || "",
        availableUntil: payload.availableUntil || "",
        course: payload.course,
      };
      console.log("➕ Adding assignment to store:", payload);
      state.assignments.push(newAssignment);
    },

    updateAssignment: (
      state,
      { payload }: { payload: Assignment }
    ) => {
      console.log("🛠 Updating assignment in store:", payload);
      state.assignments = state.assignments.map((a) =>
        a._id === payload._id ? payload : a
      );
    },

    deleteAssignment: (
      state,
      { payload }: { payload: string }
    ) => {
      console.log("🧹 Removing assignment from store:", payload);
      state.assignments = state.assignments.filter((a) => a._id !== payload);
    },
  },
});

export const {setAssignments,addAssignment,updateAssignment,deleteAssignment,} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
