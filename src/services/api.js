import axios from 'axios';

const API = axios.create({
  baseURL: '/api'
});

export const getProducts = () => {
  return API.get('/products');
};

export default API;
