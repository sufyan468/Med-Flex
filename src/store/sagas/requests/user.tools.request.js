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

// export function getAllocatedTools(data, tool_id, return_date, location_of_work, signature) {
//     var config = {
//         method: 'post',
//         url: `${API_URL}/api/tools/allocation`,
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem('access_token')}`,
//             // ...data.getHeaders(),
//         },
//         data: {
//             tool_id: data.tool_id,
//             return_date: data.return_date,
//             location_of_work: data.location_of_work,
//             signature: data.signature,
//         },
//     };
//     return axios(config);
// }

export function getAllocatedTools(tool_id, return_date, location_of_work, signature) {
    // console.log('data', data);
    // let formData = new FormData();
    // formData.append('tool_id', tool_id);
    // formData.append('return_date', return_date);
    // formData.append('location_of_work', location_of_work);
    // formData.append('signature', signature);

    const data = {
        tool_id: tool_id,
        return_date: return_date,
        location_of_work: location_of_work,
        signature: signature,
    };

    var config = {
        method: 'post',
        url: `${API_URL}api/tools/allocation`,
        data: data,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')} `,
            'Content-Type': 'application/json',
        },
    };
    axios(config)
        .then((response) => {
            // console.log('response in request =>', config);
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
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
