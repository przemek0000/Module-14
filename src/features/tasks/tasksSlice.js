import { createSlice } from "@reduxjs/toolkit";

const tasksSlicer = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDoneTasks: false
    },
    reducers: {
        addTask: (({ tasks }, { payload }) => {
                tasks.push(payload)
            }),
        toggleHideDoneTasks: state => {
            state.hideDoneTasks = !state.hideDoneTasks;
        }
    }
})

export const { addTask, toggleHideDoneTasks } = tasksSlicer.actions;
export const selectTasks = ({ tasks }) => tasks;
export default tasksSlicer.reducer;
