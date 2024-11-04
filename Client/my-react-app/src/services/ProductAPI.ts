import axios from "axios";
import { CartItem, UpdateCartProductPayload, type AddProductToCartPayload, type Product } from "./ProductAPI.types";

/* const baseURL = "http://www.bortakvall.se/api/v2";  */
const baseURL = '/api'
const FAKE_DELAY = 1500;

const instance = axios.create({
    baseURL,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    timeout: 10000,
});


/**
 * Make a generic HTTP GET request
 * 
 * @param endpoint Endpoint to get
 * @returns Response data
 */

const get = async <T>(endpoint: string) => {
    const response = await instance.get<T>(endpoint);

    // simulate slow API response
    if (FAKE_DELAY) {
        await new Promise(r => setTimeout(r, FAKE_DELAY));
    }

    return response.data;
} 


/**
 * Make a generic HTTP POST request
 * 
 * @param endpoint to post to
 * @param data Payload data
 * @returns Response data
 */

const post = async <Response, Payload>(endpoint: string, data: Payload) => {
    const response = await instance.post<Response>(endpoint, data);
    return response.data;
}

/**
 * Fetch all the products from the API
 */

    const getProducts = async (): Promise<Product[]> => {
        try {
          // This will now use the proxy defined in Vite's config
          const response = await axios.get(`${baseURL}/products`); 
          return response.data; 
        } catch (error) {
          console.error('Error fetching products:', error);
          throw error;
        }
      };

/**
 * Fetch a single product by ID from the API
 */
export const getProduct = async (id:number) => {
    return get<Product>("products/" + id);
}

/**
 * Add a product to the cart 
 */
export const addProductToCart = async (data: AddProductToCartPayload) => {
    return post<CartItem, AddProductToCartPayload>("/cart", data);
}


/**
 * Update a product in the cart 
 */
export const updateCartProduct = async (id: number, data: UpdateCartProductPayload) => {
    const response = await instance.patch<CartItem>("/cart" + id, data);
    return response.data;
}

/**
 * Remove a product from the cart
 */

export const removeProductFromCart = async (id: number) => {
    await instance.delete("cart/" + id);
    return true;
}

export default {
    getProducts,
    getProduct,
    addProductToCart,
    updateCartProduct,
    removeProductFromCart
}