import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
import snackbarReducer from './slices/snackbar.slice';
import userReducer from './slices/user.slice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    snackbar: snackbarReducer,
    user: userReducer,
});

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

export default store;
