// SingleProduct.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productAPI from ".././services/ProductAPI";
import type { Product } from "../services/ProductAPI.types";

const SingleProduct: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get the product ID from route parameters
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await productAPI.fetchProductById(Number(id));
                setProduct(productData);
                setLoading(false);
            } catch (error) {
                setError("Failed to load product details.");
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading product details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="single-product">
            {product ? (
                <>
                    <h2>{product.name}</h2>
                    <img src={product.images.large} alt={product.name} />
                    <p>Price: ${product.price}</p>
                    {product.on_sale && <p className="sale">On Sale!</p>}
                    <p>Stock Status: {product.stock_status === "instock" ? "In Stock" : "Out of Stock"}</p>
                    <div className="tags">
                        {product.tags.map(tag => (
                            <span key={tag.id} className="tag">
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
};

export default SingleProduct;
