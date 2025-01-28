import axios from 'axios';

export const api = axios.create({
    baseURL: "http://10.24.9.170:4000/",
})