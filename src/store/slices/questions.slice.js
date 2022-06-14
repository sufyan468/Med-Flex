import { createSlice } from '@reduxjs/toolkit';

const QuestionsSlice = createSlice({
    name: 'questions',
    initialState: {
        allQuestions: [],
    },
    reducers: {
        getQuestion(state, action) {},
        setQuestion(state, action) {
            state.allQuestions = action.payload;
        },
    },
});

export const { getQuestion, setQuestion } = QuestionsSlice.actions;

export default QuestionsSlice.reducer;
