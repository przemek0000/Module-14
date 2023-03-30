import tasksReducer from "./features/tasks/tasksSlice";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import watchFetchExampleTasks from "./features/tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: { tasks: tasksReducer},
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(watchFetchExampleTasks)

export default store;