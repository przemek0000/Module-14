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
        toggleDoneTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        setAllDoneTasks: state => {
            state.tasks.map(task => {
                return task.done = true;
            })
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        }
    }
})

export const { addTask, toggleHideDoneTasks,
    toggleDoneTask, setAllDoneTasks, removeTask } = tasksSlicer.actions;
export const selectTasks = ({ tasks }) => tasks;
export default tasksSlicer.reducer;
