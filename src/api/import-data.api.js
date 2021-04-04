import axios from "axios";

const URL = 'http://193.243.158.230:4500/api';

/*
   @param {Object[]} data
*/

export const importXLSData = (data = []) => {
    return axios.post(`${URL}/import`, {resultArray: data}, {
        headers: {
            'Authorization': 'test-task'
        }
    });
};