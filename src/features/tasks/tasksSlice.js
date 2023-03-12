import { createSlice } from "@reduxjs/toolkit";

const tasksSlicer = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDoneTasks: false
    },
    reducers: {
        addTask: (({ tasks }, { payload: task }) => {
            tasks.push(task)
        }),
        toggleHideDoneTasks: state => {
            state.hideDoneTasks = !state.hideDoneTasks;
        },
        toggleDoneTask: (state, action) => {
            const index = state.tasks.findIndex(({id}) => id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        markAllDoneTasks: state => {
            state.tasks.map(task => {
                return task.done = true;
            })
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(({id}) => id === action.payload);
            state.tasks.splice(index, 1);   
        }
    }
})

export const { addTask, toggleHideDoneTasks,
    toggleDoneTask, markAllDoneTasks, removeTask } = tasksSlicer.actions;
export const selectTasksState = ({ tasks }) => tasks;
export default tasksSlicer.reducer;
