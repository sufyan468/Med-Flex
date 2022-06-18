import { put, retry } from 'redux-saga/effects';
import { getUserAllocatedTools, getAllTools } from '../requests/user.tools.request';
import { setToolsList } from '../../slices/user.tool.slice';
import { showSnackBar } from '../../slices/snackbar.slice';

import { setTools } from '../../slices/user.tool.slice';

export function* handleAllTools(action) {
    try {
        const accessToken = localStorage.getItem('access_token');
        console.log('Access Token in all tools call ==>', accessToken);
        const response = yield retry(0, 0, getAllTools, accessToken);
        // console.log('Response of Tools list API ==>', response);
        const { data } = response.data;
        console.log('Data of tools list API ==>', data);
        const toolsListData = data;
        yield put(setToolsList({ toolsListData }));
    } catch (error) {
        console.log(error);
    }
}

export function* handleGetAllocatedTools(action) {
    try {
        const response = yield retry(0, 0, getUserAllocatedTools, action.payload);
        console.log('response ==>', response);
        const { data } = response;
        console.log('Data on User allocated tools response ==>', data);
        // const userData = JSON.parse(data);
        // yield put(setTools({ userData }));
    } catch (error) {
        // const snackbarObject = {
        //     type: 'error',
        //     message: 'SignUp Failed ',
        //     open: true,
        // };

        // yield put(showSnackBar(snackbarObject));
        console.log('API NOT HIT', error);
    }
}
