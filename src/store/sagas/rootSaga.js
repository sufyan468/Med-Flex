import { takeLatest } from 'redux-saga/effects';
import {
    handleSignin,
    fetchOTP,
    handleVerifyOtp,
    handleLogout,
    handleForgotEmail,
    handleResetEmail,
    handlePopularMovies,
} from './handlers/user.handler';
import { signinUser, generateOTP, verifyOtp, isEmailSent, passwordReset } from '../slices/user.slice';
import { questionsHandler } from './handlers/question.handler';
import { getQuestion } from '../slices/questions.slice';
import { isUserLogOut } from '../slices/logout.slice';

export function* watcherSaga() {
    yield takeLatest(signinUser.type, handleSignin);
    yield takeLatest(generateOTP.type, fetchOTP);
    yield takeLatest(verifyOtp.type, handleVerifyOtp);
    yield takeLatest(isUserLogOut.type, handleLogout);
    yield takeLatest(getQuestion.type, questionsHandler);
    yield takeLatest(isEmailSent.type, handleForgotEmail);
    yield takeLatest(passwordReset.type, handleResetEmail);
}
