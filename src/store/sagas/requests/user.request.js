import axios from 'axios';
import { API_CONSTANTS } from '../../../config/config';
const { API_URL } = API_CONSTANTS;
const { API_KEY } = API_CONSTANTS;

export function requestSignin(data) {
    return axios.post(`${API_URL}v1/auth/login`, data);
}

export function generateOtp(accessToken) {
    var config = {
        method: 'post',
        url: `${API_URL}v1/auth/generate-otp`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        data: {},
    };

    return axios(config);
}

export function verifyOtp(data) {
    return axios.post(
        `${API_URL}v1/auth/verify-otp?token=${data.otpToken}`,
        {
            otp: data.otp,
        },
        {
            headers: {
                Authorization: `Bearer ${data.accessToken}`,
            },
        },
    );
}

export function forgotPassword(data) {
    var config = {
        method: 'post',
        url: `${API_URL}v1/auth/forgot-password`,
        data: {
            email: data,
        },
    };
    return axios(config);
}

export function resetPassword(data) {
    var config = {
        method: 'post',
        url: `${API_URL}v1/auth/reset-password?token=${data.userToken}`,
        data: {
            password: data.password,
        },
    };
    return axios(config);
}

export function requestLogout(data) {
    console.log('tokens ==>', data);
    var config = {
        method: 'post',
        url: `${API_URL}v1/auth/logout`,
        headers: {
            Authorization: `Bearer ${data.accessToken}`,
        },
        data: {
            refreshToken: data.refreshToken,
        },
    };
    return axios(config);
}

export function getAllQuestions() {
    var config = {
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=cf8efa772446e21fdc38a89b6512c967&language=en-USl',
    };

    return axios(config);
}
