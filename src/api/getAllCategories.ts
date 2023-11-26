// services/api.js
import axios from 'axios';
import { baseUrl } from '.';
export const fetchParentCategories = () => {
  return axios.get(`${baseUrl}/categories/parents`);
};

export const getAllCategories = () => {
  return axios.get(`${baseUrl}/categories/all`);
}

