import axios from 'axios';
const url = 'http://localhost:3001';

const FetchProducts = () => axios.get(`${url}/api/products/`);
const makeOrder = order => axios.post(`${url}/api/products/`, order);

const get = {
  FetchProducts,
  makeOrder,
};

export default get;
