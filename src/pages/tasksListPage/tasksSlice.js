import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlicer = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDoneTasks: false,
        loading: false,
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
        fetchExampleTasksLoading: (state) => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        }

    }
})

export const { addTask, toggleHideDoneTasks,
    toggleDoneTask, setAllDoneTasks,
    removeTask, fetchExampleTasksLoading,
    fetchExampleTasksSuccess,
    searchTask, fetchExampleTasksError } = tasksSlicer.actions;

export const selectTasks = state => state.tasks;

export const getTaskById = (state, taskId) => {
    return selectTasks(state).tasks.find(({ id }) => id === taskId)
}

export const filterTasksbySearch = (state, search) => {
    if (!search || search.trim() === "") {
        return selectTasks(state).tasks;
    }

    return selectTasks(state).tasks.filter(({ content }) =>
        content.toLowerCase().includes(search.toLowerCase()));
}

export default tasksSlicer.reducer;