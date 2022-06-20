import { put, retry } from 'redux-saga/effects';
import { getUserAllocatedTools, getAllTools, getAllocatedTools } from '../requests/user.tools.request';
import { setToolsList, setTools } from '../../slices/user.tool.slice';
import { showSnackBar } from '../../slices/snackbar.slice';

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

export function* handleAllocatedTools(action) {
    try {
        console.log('payload:::', action.payload);
        const accessToken = localStorage.getItem('access_token');
        const response = yield retry(0, 0, getAllocatedTools, action.payload);
        // console.log('response of post call =>', response);
        const { message } = response.data;
        console.log('data ===>', message);
    } catch (error) {
        console.log('Error =>', error);
    }
}

export function* handleGetAllocatedTools(action) {
    try {
        const accessToken = localStorage.getItem('access_token');
        const response = yield retry(0, 0, getUserAllocatedTools, accessToken);
        // console.log('response ==>', response);
        const { data } = response.data;
        console.log('Data on User allocated tools response ==>', data);
        const toolsListData = data;
        yield put(setTools({ toolsListData }));
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
