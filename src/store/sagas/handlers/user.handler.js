import { put, retry } from 'redux-saga/effects';
import { getUser, loginUserRequest } from '../requests/user.request';

import { setLoginUser, setUser } from '../../slices/user.slice';

export function* handleSignUp(action) {
    try {
        const response = yield retry(0, 0, getUser, action.payload);
        const { data } = response.config;
        console.log('🚀 ~ file: user.handler.js ~ line 10 ~ function*handleSignUp ~ data', data);
        const userData = JSON.parse(data);
        console.log('🚀 ~ file: user.handler.js ~ line 12 ~ function*handleSignUp ~ userData', userData);
        yield put(setUser({ userData }));
    } catch (error) {
        console.log('API NOT HIT', error);
    }
}

export function* handleLogin(action) {
    console.log(action.payload);
    try {
        const response = yield retry(0, 0, loginUserRequest, action.payload);
        const { data } = response.config;
        const loginUserData = JSON.parse(data);
        // console.log('Logged in user data ==>', loginUserData);
        yield put(setLoginUser({ loginUserData }));
    } catch (error) {
        console.log('Login API Error =>', error);
    }
}
