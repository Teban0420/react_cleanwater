import axios from 'axios';

const adminAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export default adminAxios;    