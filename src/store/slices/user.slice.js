import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isApiDone: false,
        isOtpVerified: false,
        username: '',
        id: 0,
        mobile: '',
        otpSent: false,
        isLogOut: false,
        user: {},
        isLogoutVerify: false,
        isEmailVerified: false,
        emailSent: false,
        isTokenVerified: false,
        resetPassword: false,
    },
    reducers: {
        setUser(state, action) {
            const userData = action.payload;
            state.isApiDone = true;
            state.isOtpVerified = false;
            state.id = userData.id;
            state.mobile = userData.mobile;
            state.user = userData;
        },
        setIsDone(state, action) {
            state.isApiDone = action.payload.isApiDone;
        },
        setOTPSent(state, action) {
            state.otpSent = action.payload.otpSent;
        },
        generateOTP(state, action) {},
        signinUser(state, action) {},

        verifyOtp(state, action) {},
        setOtpVerified(state, action) {
            state.isOtpVerified = action.payload.isOtpVerified;
        },
        setIsLogOut(state, action) {
            const tokenPayload = action.payload;
            console.log('Logout API response ==>', tokenPayload);
            state.isLogOut = tokenPayload.isLogOut;
        },

        isLogoutDone(state, action) {
            state.isLogoutVerify = action.payload.isLogoutVerify;
        },
        resetState(state, action) {
            state.isApiDone = false;
            state.isOtpVerified = false;
            state.username = '';
            state.id = 0;
            state.mobile = '';
            state.otpSent = false;
            state.isLogOut = false;
            state.user = {};
            state.isLogoutVerify = false;
        },
        isEmailSent(state, action) {},
        setIsEmailSent(state, action) {
            const emailSendRes = action.payload;
            state.emailSent = true;
            state.isEmailVerified = emailSendRes.isEmailVerified;
        },
        passwordReset(state, action) {},
        setPasswordReset(state, action) {
            const resetPswRes = action.payload;
            state.resetPassword = true;
            state.isTokenVerified = resetPswRes.isTokenVerified;
        },
        resetUserState(state, action) {
            state.user = {};
        },
    },
});

export const {
    getUser,
    setUser,
    signinUser,
    setIsDone,
    setOTPSent,
    generateOTP,
    setOtpVerified,
    verifyOtp,
    isOtpVerified,
    isLogOut,
    setIsLogOut,
    isLogoutDone,
    isLogoutVerify,
    resetState,
    resetUserState,
    isEmailSent,
    setIsEmailSent,
    passwordReset,
    setPasswordReset,
} = userSlice.actions;

export default userSlice.reducer;
