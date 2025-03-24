import { createSlice } from "@reduxjs/toolkit";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: number;
}

const initialState: { users: User[] } = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
