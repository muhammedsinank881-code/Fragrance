import { useState } from "react";

export const useProductFilters = () => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [sortType, setSortType] = useState("");
    const [rating, setRating] = useState(0);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [includeOutOfStock, setIncludeOutOfStock] = useState(false);


    const handleBrandFilter = (brandId) => {
        setCurrentPage(1);
        setSelectedBrands((prev) =>
            prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
        );
    };

    const handleCategoryFilter = (categoryId) => {
        setCurrentPage(1);
        setSelectedCategory((prev) =>
            prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
        );
    };

    const handleSort = (type) => {
        setCurrentPage(1);
        if (!type || type === "") {
            setSortBy("");
            setSortType("");
            return;
        }
        const map = {
            "low-high": { sortBy: "price", sortType: "asc" },
            "high-low": { sortBy: "price", sortType: "desc" },
            "a-z": { sortBy: "name", sortType: "asc" },
            "z-a": { sortBy: "name", sortType: "desc" },
        };
        if (map[type]) {
            setSortBy(map[type].sortBy);
            setSortType(map[type].sortType);
        }
    };

    const handleRating = (star) => {
        setCurrentPage(1);
        setRating((prev) => (prev === star ? 0 : star)); // toggle off if same star clicked
    };

    const clearFilters = () => {
        setSelectedBrands([]);
        setSelectedCategory([]);
        setRating(0);
        setSortBy("");
        setSortType("");
        setMinPrice("");
        setMaxPrice("");
        setCurrentPage(1);
    };

    return {
        selectedBrands,
        selectedCategory,
        sortBy,
        sortType,
        rating,
        minPrice, setMinPrice,
        maxPrice, setMaxPrice,
        currentPage, setCurrentPage,
        includeOutOfStock, setIncludeOutOfStock,
        handleBrandFilter,
        handleCategoryFilter,
        handleSort,
        handleRating,
        clearFilters,
    };
};