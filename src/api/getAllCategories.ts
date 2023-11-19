// services/api.js
import axios from 'axios';

const baseUrl = 'https://blue-angry-gorilla.cyclic.app';


export const fetchParentCategories = () => {
  return axios.get(`${baseUrl}/categories/parents`);
};

export const getAllCategories = () => {
    return axios.get(`${baseUrl}/categories/all`);
    }

export const getAllProducts = async () => {
    const res = axios.get(`${baseUrl}/products`);
    return await res;
    }