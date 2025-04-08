import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";
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

const initialState: { assignments: Assignment[] } = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      console.log("🔄 Setting assignments in Redux:", action.payload);
      state.assignments = action.payload;
    },
    addAssignment: (state, action) => {
      // ✅ 直接使用后端返回的数据（带 _id）
      state.assignments.push(action.payload);
    },

    updateAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === payload._id ? payload : a
      );
    },

    deleteAssignment: (state, { payload }) => {
      state.assignments = state.assignments.filter((a) => a._id !== payload);
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  updateAssignment,
  deleteAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
