import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://finchback.jakirdev.com/api/', 
});

export default api;
