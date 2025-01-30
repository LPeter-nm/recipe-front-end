import axios from 'axios';

export const api = axios.create({
    baseURL: "http://10.24.8.163:4000/",
})