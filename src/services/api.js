import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080'
});

export const getProducts = () => {
  return API.get('/products');
};
