import { put, retry } from 'redux-saga/effects';
import { getUser, loginUserRequest, logoutRequest } from '../requests/user.request';
import { showSnackBar } from '../../slices/snackbar.slice';

import { setLoginUser, setUser } from '../../slices/user.slice';

export function* handleSignUp(action) {
    try {
        const response = yield retry(0, 0, getUser, action.payload);
        const { data } = response.config;
        const userData = JSON.parse(data);
        yield put(setUser({ userData }));
    } catch (error) {
        const snackbarObject = {
            type: 'error',
            message: 'SignUp Failed ',
            open: true,
        };

        yield put(showSnackBar(snackbarObject));
        console.log('API NOT HIT', error);
    }
}

export function* handleLogin(action) {
    try {
        const response = yield retry(0, 0, loginUserRequest, action.payload);
        // console.log('response of the tools =>', response);
        const { data } = response;
        console.log('Data from login Response ==>', data);
        const loginUserData = data.payload;
        const { access_token } = loginUserData;
        localStorage.setItem('access_token', access_token);
        console.log('Access Token in localstore =>', access_token);
        yield put(setLoginUser({ loginUserData }));
    } catch (error) {
        console.log('Login API Error =>', error);
    }
}

export function* handleLogout(action) {
    try {
        const response = yield retry(0, 0, logoutRequest, action.payload);
        localStorage.removeItem('access_token');
    } catch (error) {
        console.log('Logout API Error =>', error);
    }
}
