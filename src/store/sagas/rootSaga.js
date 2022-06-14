import { takeLatest } from 'redux-saga/effects';
import { handleSignUp } from '../sagas/handlers/user.handler';
import { getUser } from '../slices/user.slice';
export function* watcherSaga() {
    yield takeLatest(getUser.type, handleSignUp);
}
