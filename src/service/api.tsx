import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bico-b726f27212c4.herokuapp.com',
});

export default api;
