import { put, call, takeLatest, takeEvery, select, delay } from 'redux-saga/effects';
import { fetchExampleTasksError, fetchExampleTasksLoading, fetchExampleTasksSuccess, selectTasks } from '../pages/tasksListPage/tasksSlice';
import getExampleTasks from './getExampleTasks';
import { saveTasksInLocalStorage } from '../pages/tasksListPage/tasksLocalStorage';

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks)
        yield delay(Math.random() * 900 + 500)
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield call(alert, "Can't get example data...:(");
        yield put(fetchExampleTasksError());
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
