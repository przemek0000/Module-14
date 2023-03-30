import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { fetchExampleTasks, setTasks } from './tasks/tasksSlice';
import getExampleTasks from './getExampleTasks';

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks)
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Can't get example data...:(")
    }
}

export default function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler)
}