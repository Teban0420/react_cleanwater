import axios from 'axios';

const adminAxios = axios.create({
    baseURL: 'http://localhost:5000'
});

export default adminAxios;  