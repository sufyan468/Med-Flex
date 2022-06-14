import axios from 'axios';
import { API_CONSTANTS } from '../../../config/config';
const { API_URL } = API_CONSTANTS;

export function getUser(data) {
    var config = {
        method: 'post',
        url: `${API_URL}api/auth/signup`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    return axios(config);
}
