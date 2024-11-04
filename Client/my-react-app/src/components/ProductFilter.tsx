import React, { useState } from "react";

interface ProductFilterProps {
    onFilterChange: (filters: { vegan: boolean; palmOilFree: boolean; gelatinFree: boolean }) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        vegan: false,
        palmOilFree: false,
        gelatinFree: false,
    });

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        const updatedFilters = { ...filters, [name]: checked };
        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    return (
        <div>
            <p>Show all candies or choose those that are: </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
                <label>
                    <input
                        type="checkbox"
                        name="vegan"
                        checked={filters.vegan}
                        onChange={handleFilterChange}
                        style={{ marginRight: "5px" }}
                    />
                    Vegan
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="palmOilFree"
                        checked={filters.palmOilFree}
                        onChange={handleFilterChange}
                        style={{ marginRight: "5px" }}
                    />
                    Palm Oil Free
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="gelatinFree"
                        checked={filters.gelatinFree}
                        onChange={handleFilterChange}
                        style={{ marginRight: "5px" }}
                    />
                    Gelatin Free
                </label>
            </div>
        </div>
    );
};

export default ProductFilter;
