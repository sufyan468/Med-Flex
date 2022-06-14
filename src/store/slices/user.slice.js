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
        },
    },
});
export const { getUser, setUser, loginUser, setLoginUser } = usersSlice.actions;

export default usersSlice.reducer;
