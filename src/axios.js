import axios from 'axios';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL || `${window.location.origin}/api/`,
});

export default api;
