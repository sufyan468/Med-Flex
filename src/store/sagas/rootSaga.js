import { takeLatest } from 'redux-saga/effects';
import { handleSignUp, handleLogin } from '../sagas/handlers/user.handler';
import { getUser, loginUser } from '../slices/user.slice';
export function* watcherSaga() {
    yield takeLatest(getUser.type, handleSignUp);
    yield takeLatest(loginUser.type, handleLogin);
}
