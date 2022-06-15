import { createSlice } from '@reduxjs/toolkit';
const usersSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        userObj: {},
        userLogout: false,
        isUserLogin: false,
        isApiDone: false,
    },
    reducers: {
        getUser(state, action) {},
        setUser(state, action) {
            const userData = action.payload;
            state.userObj = userData;
        },
        loginUser(state, action) {},
        setLoginUser(state, action) {
            const userData = action.payload;
            state.user = userData;
            state.isApiDone = true;
            state.isUserLogin = true;
            console.log('🚀 ~ file: user.slice.js ~ line 22 ~ setLoginUser ~ userData', userData);
        },
        logOutUser(state, action) {},
        setLogOutUser(state, action) {
            const userData = action.payload;
            state.isApiDone = false;
            state.userLogout = userData;
        },
    },
});
export const { getUser, setUser, loginUser, setLoginUser, logOutUser, setLogOutUser } = usersSlice.actions;

export default usersSlice.reducer;
