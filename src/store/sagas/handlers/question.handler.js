import { call, put } from 'redux-saga/effects';
import { getAllQuestions } from '../requests/user.request';
import { setQuestion } from '../../slices/questions.slice';

export function* questionsHandler(action) {
    try {
        const response = yield call(getAllQuestions);

        const { data } = response;

        const questionsData = data;
        console.log(
            '🚀 ~ file: question.handler.js ~ line 12 ~ function*questionsHandler ~ questionsData',
            questionsData,
        );

        yield put(setQuestion({ questionsData }));
    } catch (error) {
        console.log(error);
    }
}
