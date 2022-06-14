import { put, retry, takeEvery } from 'redux-saga/effects';
import {
    setUser,
    setOTPSent,
    setOtpVerified,
    resetState,
    setIsEmailSent,
    setPasswordReset,
} from '../../slices/user.slice';
import { setUserLogOut } from '../../slices/logout.slice';
import {
    requestSignin,
    generateOtp,
    verifyOtp,
    requestLogout,
    forgotPassword,
    resetPassword,
    getPopularMovies,
} from '../requests/user.request';

export function* handleSignin(action) {
    try {
        console.log(action.payload);
        const response = yield retry(0, 0, requestSignin, action.payload);
        const { data } = response;
        const userData = data.user;

        // Token Save to local Storage
        const access = JSON.stringify(data.tokens.access.token);
        const refresh = JSON.stringify(data.tokens.refresh.token);

        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);

        yield put(setUser({ userData }));
    } catch (error) {
        console.log(error);
    }
}

export function* fetchOTP(action) {
    try {
        const accessTokenObj = JSON.parse(localStorage.getItem('accessToken'));
        console.log('Fetch OTP response ', accessTokenObj);
        const response = yield retry(0, 0, generateOtp, accessTokenObj, action.payload);
        const { data } = response;
        const logInUserData = data.user;
        localStorage.setItem('userMobile', JSON.stringify(logInUserData.mobile));

        const otp = JSON.stringify(data.tokens.otp.token);
        localStorage.setItem('otpToken', otp);

        yield put(setOTPSent({ otpSent: true }));
    } catch (error) {
        console.log(error);
    }
}

export function* handleVerifyOtp(action) {
    try {
        const accessTokenObj = JSON.parse(localStorage.getItem('accessToken'));
        const otpTokenObj = JSON.parse(localStorage.getItem('otpToken'));

        action.payload.accessToken = accessTokenObj;
        action.payload.otpToken = otpTokenObj;

        const response = yield retry(0, 0, verifyOtp, action.payload);

        const { data } = response;
        const logInUserData = data.user;

        const user = JSON.stringify({ logInUserData });
        // User Object Save to local Storage
        localStorage.setItem('user', user);

        yield put(setOtpVerified({ isOtpVerified: true }));
    } catch (error) {
        yield put(setOtpVerified({ isOtpVerified: false }));
        console.log(error);
    }
}
export function* handleForgotEmail(action) {
    try {
        const response = yield retry(0, 0, forgotPassword, action.payload);
        console.log('🚀 ~ file: user.handler.js ~ line 90 ~ function*handleForgotEmail ~ response', response);

        yield put(setIsEmailSent({ emailSent: true }));
    } catch (error) {
        yield put(setIsEmailSent({ emailSent: false }));

        console.log('Forgot Password API Call failed ::', error);
    }
}

export function* handleResetEmail(action) {
    try {
        const response = yield retry(0, 0, resetPassword, action.payload);
        console.log('🚀 ~ file: user.handler.js ~ line 103 ~ function*handleResetEmail ~ response', response);

        yield put(setPasswordReset({ resetPassword: true }));
    } catch (error) {
        yield put(setPasswordReset({ resetPassword: false }));
        console.log('Forgot Password API Call failed ::', error);
    }
}
export function* handleLogout(action) {
    try {
        console.log(action.payload);
        const accessToken = JSON.parse(localStorage.getItem('accessToken'));
        const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));

        const data = {
            accessToken,
            refreshToken,
        };

        const response = yield retry(0, 0, requestLogout, data);
        console.log('🚀 ~ file: user.handler.js ~ line 91 ~ function*handleLogout ~ response', response);
        yield put(resetState());
        yield put(setUserLogOut({ userLogOut: true }));
    } catch (error) {
        yield put(setUserLogOut({ userLogOut: false }));
        console.log(error);
    }
}
