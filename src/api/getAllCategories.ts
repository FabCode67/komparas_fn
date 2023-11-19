// services/api.js
import axios from 'axios';

const baseUrl = 'https://blue-angry-gorilla.cyclic.app/categories';

export const fetchParentCategories = () => {
  return axios.get(`${baseUrl}/parents`);
};
