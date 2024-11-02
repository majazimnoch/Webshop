/* main product interface */
export interface Product {
    id: number;
    name: string;
    price: number;
    on_sale: boolean;
    images: Image;
    stock_status: StockStatus;
    tags: Tag[];
  }

/* enum type */
export type StockStatus = "instock" | "outofstock"

/* interface for image */
export interface Image {
    thumbnail: string;
    large: string;
  }

/* interface for tags of the products */
export interface Tag {
    id: number;
    name: string;
    slug: string;
  } 

/* type for adding product to the cart omitting the unnecessary ones */
export type AddProductToCartPayload = Pick<Product, 'id' | 'name' | 'price' | 'on_sale'>;

/* updating order */
export type UpdateCartProductPayload = Partial<AddProductToCartPayload> & { quantity: number };

/* type for a cart item, including quantity and product details */
export interface CartItem extends AddProductToCartPayload {
    quantity: number;
}

/* type for product summary (e.g., for product listings) */
export type ProductSummary = Pick<Product, "id" | "name" | "price" | "on_sale" | "stock_status" | "images">;