import { put, call, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { fetchExampleTasks, selectTasks, setTasks } from './tasks/tasksSlice';
import getExampleTasks from './getExampleTasks';
import { saveTasksInLocalStorage } from './tasks/tasksLocalStorage';

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks)
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Can't get example data...:(")
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}
