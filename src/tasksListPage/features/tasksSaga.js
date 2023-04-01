import { put, call, takeLatest, takeEvery, select, delay } from 'redux-saga/effects';
import { fetchExampleTasksLoading, fetchExampleTasksSuccess, selectTasks, setTasks } from './tasks/tasksSlice';
import getExampleTasks from './getExampleTasks';
import { saveTasksInLocalStorage } from './tasks/tasksLocalStorage';

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks)
        yield delay(Math.random() * 900 + 500)
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield call(alert, "Can't get example data...:(")
    }
}

function* saveTasksInLocalStorageHandler() {
    const { tasks } = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasksLoading.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
} 
