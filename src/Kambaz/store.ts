import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Assignments/reducer";
import enrollmentsReducer from "./Enrollments/reducer";
import usersReducer from "./Users/reducer";


const store = configureStore({
reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer,
    usersReducer,
    },
});
export default store;