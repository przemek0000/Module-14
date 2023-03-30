import tasksReducer from "./features/tasks/tasksSlice";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./features/tasks/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: { tasks: tasksReducer},
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store;