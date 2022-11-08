import axios from 'axios';

export const makeRequest = axios.create({
    baseUrl: 'http://localhost:8000/api/',
    withCredentials: true,
})