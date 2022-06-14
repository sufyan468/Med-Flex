import { createSlice } from '@reduxjs/toolkit';

const logoutSlice = createSlice({
    name: 'logout',
    initialState: {
        isLogoutApiDone: false,
        userLogOut: false,
    },
    reducers: {
        isUserLogOut(state, action) {},
        setUserLogOut(state, action) {
            const logoutResponse = action.payload;
            state.isLogoutApiDone = true;
            state.userLogOut = logoutResponse.userLogOut;
        },
    },
});

export const { setUserLogOut, isUserLogOut } = logoutSlice.actions;

export default logoutSlice.reducer;
