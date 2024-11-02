import axios from "axios";
import type { Product, ProductSummary, AddProductToCartPayload, UpdateCartProductPayload, CartItem } from "./ProductAPI.types";

const baseURL = "http://www.bortakvall.se/api/v2/products";

const instance = axios.create({
    baseURL,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

export default instance;

/**
 * Fetch all products
 */
/* export const fetchAllProducts = async (): Promise<ProductSummary[]> => {
    try {
        const response = await axios.get<ProductSummary[]>("/");
        return response.data;
    } catch (error) {
        console.error("Error fetching product", error);
        throw error;
    }
} */


    export const fetchAllProducts = async (): Promise<Product[]> => {
        const response = await instance.get<Product[]>("/products");
        return response.data;
      };
      
      // You can export other methods similarly
      export const fetchProductById = async (id: number): Promise<Product> => {
        const response = await instance.get<Product>(`/products/${id}`);
        return response.data;
      };

