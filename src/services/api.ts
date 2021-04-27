import axios from 'axios';

const api = axios.create({
    baseURL: ' https://solrachix-json-api.herokuapp.com/v1/Oliveira-86/nlw-5-plantManage',
});

export default api;