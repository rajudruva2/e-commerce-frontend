import axios from 'axios';

const API = axios.create({
  baseURL: 'http://aeb7e038165c449d789c27495443828d-753465246.ap-south-1.elb.amazonaws.com'
});

export const getProducts = () => {
  return API.get('/products');
};

export default API;