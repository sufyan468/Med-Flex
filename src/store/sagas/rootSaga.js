import { takeLatest } from 'redux-saga/effects';
import { handleSignUp, handleLogin, handleLogout } from '../sagas/handlers/user.handler';
import { getUser, loginUser, logOutUser } from '../slices/user.slice';
export function* watcherSaga() {
    yield takeLatest(getUser.type, handleSignUp);
    yield takeLatest(loginUser.type, handleLogin);
    yield takeLatest(logOutUser.type, handleLogout);
}
