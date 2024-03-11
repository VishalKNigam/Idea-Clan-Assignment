import axios from 'axios';

const BASE_URL = 'https://lmsbackend-1qbi.onrender.com/';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
