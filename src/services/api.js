import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
   headers: {
    accept: "*/*",
    "Content-Type": "application/json",
  },
});

export default API; 



// import { createContext, useEffect, useRef, useState } from "react";
// import API from "../services/api.js";
// import { ENDPOINTS } from "../services/endpoint.js";

// export const ProductContext = createContext();

// const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [brands, setBrands] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);
//   const [searchQuery, setSearchQuery] = useState("");

//   const abortControllerRef = useRef(null);



  // const getProducts = async () => {
  //   try {
  //     const response = await API.get(
  //       ENDPOINTS.PRODUCT_MASTER,
  //       {
  //         headers: {
  //           page: 1,
  //           pageSize: 100,
  //         },
  //       }
  //     );

  //     const allProducts = response?.data?.data || [];

  //     setProducts(allProducts);
  //     setTotalCount(response?.data?.totalCount || 0);

  //     console.log(allProducts, "kkk");


  //     // UNIQUE BRANDS
  //     setBrands([
  //       ...new Map(
  //         allProducts
  //           .filter((p) => p.brandID)
  //           .map((p) => [
  //             p.brandID,
  //             {
  //               id: p.brandID,
  //               name: p.brandName,
  //             },
  //           ])
  //       ).values(),
  //     ]);

  //     // UNIQUE CATEGORIES
  //     setCategories([
  //       ...new Map(
  //         allProducts
  //           .filter((p) => p.categoryId)
  //           .map((p) => [
  //             p.categoryId,
  //             {
  //               id: p.categoryId,
  //               name: p.categoryName,
  //             },
  //           ])
  //       ).values(),
  //     ]);
  //   } catch (error) {
  //     console.log("FILTER ERROR:", error);
  //   }
  // };




  //   return (
  //     <ProductContext.Provider
  //       value={{
  //         products,
  //         brands,
  //         categories,
  //         totalCount,
  //         loading,
  //         getProducts,
  //         // getAllFilters,
  //         searchQuery,
  //         setSearchQuery,
  
  //         filterProducts,
  //       }}
  //     >
  //       {children}
  //     </ProductContext.Provider>
  //   );
  // };
  
  // export default ProductProvider;