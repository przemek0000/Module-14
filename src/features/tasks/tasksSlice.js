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
        },
        toggleDoneTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        markAllDoneTasks: state => {
            state.tasks.map(task => {
                task.done = true;
            })
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    }
})

export const { addTask, toggleHideDoneTasks,
    toggleDoneTask, markAllDoneTasks, removeTask } = tasksSlicer.actions;
export const selectTasks = ({ tasks }) => tasks;
export default tasksSlicer.reducer;
