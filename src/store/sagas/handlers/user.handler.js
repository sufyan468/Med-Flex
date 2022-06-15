import { put, retry } from 'redux-saga/effects';
import { getUser, loginUserRequest } from '../requests/user.request';

import { setLoginUser, setUser } from '../../slices/user.slice';

export function* handleSignUp(action) {
    try {
        const response = yield retry(0, 0, getUser, action.payload);
        const { data } = response.config;
        const userData = JSON.parse(data);
        yield put(setUser({ userData }));
    } catch (error) {
        console.log('API NOT HIT', error);
    }
}

export function* handleLogin(action) {
    try {
        const response = yield retry(0, 0, loginUserRequest, action.payload);
        const { data } = response;
        const loginUserData = data.payload;
        const { access_token } = loginUserData;
        localStorage.setItem('access_token', access_token);
        yield put(setLoginUser({ loginUserData }));
    } catch (error) {
        console.log('Login API Error =>', error);
    }
}
