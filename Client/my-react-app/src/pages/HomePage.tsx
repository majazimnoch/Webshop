import React, { useEffect, useState } from "react";
import productAPI from "../services/ProductAPI";
import { Product } from "../services/ProductAPI.types";
import Button from 'react-bootstrap/Button';
import ProductFilter from "../components/ProductFilter";


interface ApiResponse {
    status: string;
    data: Product[];
}

const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState({
        vegan: false,
        palmOilFree: false,
        gelatinFree: false
    });

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

    const filteredProducts = products.filter(product => {
        const tags = product.tags.map(tag => tag.slug);
        return (
            (!filters.vegan || tags.includes("vegansk")) &&
            (!filters.palmOilFree || tags.includes("palmoljefri")) &&
            (!filters.gelatinFree || tags.includes("gelatinfri"))
        );
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>

            <ProductFilter onFilterChange={setFilters} />
            <div className="product-list">
                {filteredProducts.map(product => {
                    return (
                        <div key={product.id} className="product-item">
                            <img
                                src={`${BASE_URL}${product.images.thumbnail}`}
                                alt={product.name}
                            />
                            <h5>{product.name}</h5>
                            <p>Price: ${product.price.toFixed(2)}</p>
                            <Button variant="primary">Add to cart</Button>{' '}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomePage;

