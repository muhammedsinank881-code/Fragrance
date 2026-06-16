import { createContext, useState } from "react";
import API from "../services/api.js";
import { ENDPOINTS } from "../services/endpoint.js";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const getProducts = async (page = 1, pageSize = 20) => {
    // This function acts as fallback or initial load handler
    return filterProducts({ page, pageSize });
  };

  const filterProducts = async (filters) => {


    setLoading(true);
    try {
      const {
        page = 1,
        pageSize = 20,
        searchQuery = filters.searchQuery || "",
        selectedCategory = [],
        selectedBrands = [],
        minPrice = "",
        maxPrice = "",
        rating = 0,
        sortBy = "",
        sortType = "",
      } = filters || {};



      const isAdvanceFilter =
        rating > 0 ||
        (minPrice !== "" && Number(minPrice) > 0) ||
        (maxPrice !== "" && Number(maxPrice) > 0) ||
        sortBy || sortType;
      

      const isBasicFilter =
        (selectedCategory && selectedCategory.length > 0) ||
        (selectedBrands && selectedBrands.length > 0) ||
        (searchQuery && searchQuery.trim() !== "");

      let response;

      if (isAdvanceFilter) {
        // API 3: getProductFilter (POST)
        const payload = {
          brandIDs: selectedBrands ? selectedBrands.join(",") : "",
          categoryIDs: selectedCategory ? selectedCategory.join(",") : "",
          minPrice: minPrice ? Number(minPrice) : 0,
          maxPrice: maxPrice ? Number(maxPrice) : 0,
          pageNumber: page,
          pageSize: pageSize,
          sortBy: sortBy || "",
          sortType: sortType || "",
          ratingFilter: Number(rating) || 0,
        };
        console.log(payload ,"payload");
        


        response = await API.post(ENDPOINTS.PRODUCT_FILTER, payload);
      } else if (isBasicFilter) {
        // API 2: getProductMaster with headers
        const headers = {
          page: page,
          pageSize: pageSize,
        };  

        if (searchQuery) headers.productName = searchQuery;
        if (selectedCategory && selectedCategory.length > 0) headers.categoryID = selectedCategory.join(",");
        if (selectedBrands && selectedBrands.length > 0) headers.brandID = selectedBrands.join(",");

        response = await API.get(ENDPOINTS.PRODUCT_MASTER, { headers });
        
      } else {
        // API 1: Initial Render
        response = await API.get(ENDPOINTS.PRODUCT_MASTER, {
          headers: { page, pageSize },
        });
      }

      const allProducts = response?.data?.data || [];
      setProducts(allProducts);
      setTotalCount(response?.data?.totalCount || 0);

      // Extract unique brands and categories on first successful fetch
      if (allProducts.length > 0) {
        setBrands((prev) => {
          if (prev.length > 0) return prev;
          return [
            ...new Map(
              allProducts
                .filter((p) => p.brandID)
                .map((p) => [p.brandID, { id: p.brandID, name: p.brandName }])
            ).values(),
          ];
        });

        setCategories((prev) => {
          if (prev.length > 0) return prev;
          return [
            ...new Map(
              allProducts
                .filter((p) => p.categoryId)
                .map((p) => [p.categoryId, { id: p.categoryId, name: p.categoryName }])
            ).values(),
          ];
        });
      }
    } catch (error) {
      console.log("Filter Error:", error);
      setProducts([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        brands,
        categories,
        totalCount,
        loading,
        getProducts,
        searchQuery,
        setSearchQuery,
        filterProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
