import { baseUrl } from "./getAllCategories";
import axios from "axios";

export const getAllProducts = async () => {
    const res = axios.get(`${baseUrl}/products`);
    return await res;
}

export const getPoductByCategory = async (category: string) => {
    const res = axios.get(`${baseUrl}/products/category/${category}`);
    return await res;
}