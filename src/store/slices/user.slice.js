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
    },
});
export const { setUser, getUser } = usersSlice.actions;

export default usersSlice.reducer;
