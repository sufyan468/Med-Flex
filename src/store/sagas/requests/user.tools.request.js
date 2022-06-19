import axios from 'axios';
import { API_CONSTANTS } from '../../../config/config';
import fs from 'fs';
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

export function getAllocatedTools(data, tool_id, return_date, location_of_work, signature) {
    var config = {
        method: 'post',
        url: `${API_URL}/api/tools/allocation`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            // ...data.getHeaders(),
        },
        data: {
            tool_id: data.tool_id,
            return_date: data.return_date,
            location_of_work: data.location_of_work,
            signature: data.signature,
        },
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
