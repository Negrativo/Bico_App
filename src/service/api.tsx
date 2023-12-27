import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://bico-b726f27212c4.herokuapp.com',
  baseURL: 'http://192.168.2.121:8070',
});

export default api;
