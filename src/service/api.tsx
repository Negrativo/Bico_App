import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.113:8070',
});

export default api;
