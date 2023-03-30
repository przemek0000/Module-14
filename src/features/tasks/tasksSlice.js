import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlicer = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
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
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        }
    }
})

export const { addTask, toggleHideDoneTasks,
    toggleDoneTask, setAllDoneTasks,
    removeTask, fetchExampleTasks,
    setTasks } = tasksSlicer.actions;

export const selectTasks = state => state.tasks;
export default tasksSlicer.reducer;
