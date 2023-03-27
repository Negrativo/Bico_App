import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.19:8070',
});

export default api;
