// services/api.js
import axios from 'axios';

export const baseUrl = 'https://blue-angry-gorilla.cyclic.app';


export const fetchParentCategories = () => {
  return axios.get(`${baseUrl}/categories/parents`);
};

export const getAllCategories = () => {
  return axios.get(`${baseUrl}/categories/all`);
}

