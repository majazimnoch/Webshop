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

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response: ApiResponse = await productAPI.getProducts();
                console.log("API Response:", response); // Log the API response
                if (response.status === "success" && Array.isArray(response.data)) {
                    setProducts(response.data); // Update state with products from the data field
                } else {
                    throw new Error("Unexpected response format");
                }
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Failed to load products."); // Set error message
            } finally {
                setLoading(false); // Set loading to false regardless of success or error
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Display a loading state
    }

    if (error) {
        return <div>{error}</div>; // Display error message if there is one
    }

    return (
        <div>
            <h1>Home Page</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <h3>{product.name}</h3>
                        <p>{product.on_sale}</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        {/* Add more product details here */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;

