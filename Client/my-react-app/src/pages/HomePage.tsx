import React, { useEffect, useState } from "react";
import productAPI from "../services/ProductAPI";
import { Product } from "../services/ProductAPI.types";

interface ApiResponse {
    status: string;
    data: Product[];
}

const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Base URL for images
    const BASE_URL = "https://www.bortakvall.se";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response: ApiResponse = await productAPI.getProducts();
                console.log("API Response:", response);
                if (response.status === "success" && Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    throw new Error("Unexpected response format");
                }
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Failed to load products.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Product List</h1>
            <div className="product-list">
                {products.map(product => {
                    // Log the image URL to the console
                    console.log('Product Image URL:', product.description);

                    return (
                        <div key={product.id} className="product-item">
                            <h3>{product.name}</h3>
                            <h2>desc{product.description}</h2>
                            <img
                                src={`${BASE_URL}${product.images.thumbnail}`}
                                alt={product.name}
                            />
                            <p>Price: ${product.price.toFixed(2)}</p>
                            <p>{product.on_sale ? "On Sale" : "Not on Sale"}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomePage;

