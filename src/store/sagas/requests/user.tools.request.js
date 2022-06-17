import axios from 'axios';
import { API_CONSTANTS } from '../../../config/config';
const { API_URL } = API_CONSTANTS;

export function getAllTools(data) {
    var config = {
        method: 'get',
        url: `${API_URL}api/tools`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        data: data,
    };
    return axios(config);
}

export function getUserAllocatedTools(data) {
    console.log(data);
    var config = {
        method: 'get',
        url: `${API_URL}api/tools/allocation`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json',
        },
        data: data,
    };
    return axios(config);
}
