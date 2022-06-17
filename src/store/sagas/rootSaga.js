import { takeLatest } from 'redux-saga/effects';
import { getUser, loginUser, logOutUser } from '../slices/user.slice';
import { getTools, getToolsList } from '../slices/user.tool.slice';
import { handleSignUp, handleLogin, handleLogout } from '../sagas/handlers/user.handler';
import { handleGetAllocatedTools, handleAllTools } from '../sagas/handlers/user.tools.handler';

export function* watcherSaga() {
    yield takeLatest(getUser.type, handleSignUp);
    yield takeLatest(loginUser.type, handleLogin);
    yield takeLatest(logOutUser.type, handleLogout);
    yield takeLatest(getTools.type, handleGetAllocatedTools);
    yield takeLatest(getToolsList.type, handleAllTools);
}
