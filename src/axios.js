import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://139.59.222.237:8000/api/', 
});

export default api;
