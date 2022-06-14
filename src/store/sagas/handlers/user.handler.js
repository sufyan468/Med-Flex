import { put, retry } from 'redux-saga/effects';
import { setUser } from '../../slices/user.slice';
import { getUser } from '../requests/user.request';

export function* handleSignUp(action) {
    try {
        const response = yield retry(0, 0, getUser, action.payload);
        // debugger;
        const { data } = response.config;
        console.log('🚀 ~ file: user.handler.js ~ line 10 ~ function*handleSignUp ~ data', data);
        const userData = JSON.parse(data);
        console.log('🚀 ~ file: user.handler.js ~ line 12 ~ function*handleSignUp ~ userData', userData);
        yield put(setUser({ userData }));
    } catch (error) {
        console.log('API NOT HIT', error);
    }
}
