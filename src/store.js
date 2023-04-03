import tasksReducer from "./pages/tasksListPage/tasksSlice";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./features/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: { tasks: tasksReducer},
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store;