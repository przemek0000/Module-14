import tasksReducer from "./features/tasks/tasksSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: { tasks: tasksReducer}
})