import { createSlice } from "@reduxjs/toolkit";

const tasksSlicer = createSlice({
    name: "tasks",
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (
            ({ tasks }, { payload }) => {
                tasks.push(payload)
            })
    }
})

export const { addTask } = tasksSlicer.actions;
export const selectTasks = ({tasks}) => tasks;
export default tasksSlicer.reducer;