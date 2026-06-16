import React, { useContext, useEffect, useState, useRef } from "react";
import { FiChevronDown, FiFilter, FiX } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";
import { useProductFilters } from "../context/useProductFilters";
import ProductCard from "./ProductCard";
import AddBoard from "./AddBoard";
import LoadingEffect from "./LoadingEffect";
import { useDebounce } from "../hooks/useDebounce";
import SidebarContent from "./SidebarContent";
import SelectedProductMOdal from "./SelectedProductMOdal";

const HomePage = () => {
  const {
    products,
    brands,
    categories,
    totalCount,
    loading,
    getProducts,
    // getAllFilters,
    filterProducts,
    searchQuery,
  } = useContext(ProductContext);

  const {
    selectedBrands,
    selectedCategory,
    sortBy,
    sortType,
    rating,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    currentPage, setCurrentPage,
    handleBrandFilter,
    handleCategoryFilter,
    handleSort,
    handleRating,
    clearFilters,
  } = useProductFilters();

  const [sortOpen, setSortOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [includeOutOfStock, setIncludeOutOfStock] = useState(false);
  const [minInput, setminInput] = useState("")
  const [maxInput, setmaxInput] = useState("")

  const [selectedProduct, setSelectedProduct] = useState(null);

  const debouncedMinInput = useDebounce(minInput);
  const debouncedMaxInput = useDebounce(maxInput);


  const displayProducts = includeOutOfStock ? products : products.filter((p) => p.stockQty > 0);
  const totalPages = Math.ceil(totalCount / 20);


  useEffect(() => {
    filterProducts({
      page: currentPage,
      pageSize: 20,
      searchQuery,
      selectedCategory,
      selectedBrands,
      minPrice: debouncedMinInput,
      maxPrice: debouncedMaxInput,
      rating,
      sortBy,
      sortType,
    });
  }, [
    currentPage,
    searchQuery,
    selectedCategory,
    selectedBrands,
    debouncedMinInput,
    debouncedMaxInput,
    rating,
    sortBy,
    sortType
  ]);

  // debounce  for price range
  useEffect(() => {
    setMinPrice(debouncedMinInput);
    setMaxPrice(debouncedMaxInput);
    setCurrentPage(1);
  }, [debouncedMinInput, debouncedMaxInput]);

  // useEffect(() => {
  //   if (!minPrice) setminInput("");
  //   if (!maxPrice) setmaxInput("");
  // }, [minPrice, maxPrice]);

  const prevSearchRef = React.useRef(searchQuery);
  useEffect(() => {
    if (prevSearchRef.current !== searchQuery) {
      prevSearchRef.current = searchQuery;
      setCurrentPage(1);
    }
  }, [searchQuery]);

  if (loading) return <LoadingEffect />;

  return (
    <div className="w-full px-4 sm:px-8 md:px-14 lg:px-20 bg-white relative">

      {/* Mobile Floating Filter Toggle Trigger */}
      <button
        onClick={() => setMobileSidebarOpen(true)}
        className="fixed bottom-6 right-6 z-40 md:hidden bg-black text-white p-4 rounded-full shadow-2xl flex items-center gap-2 font-medium text-sm"
      >
        <FiFilter /> Filters
      </button>

      {/* Mobile Sidebar Overlay Canvas */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 md:hidden flex justify-end">
          <div className="w-[280px] bg-white h-full overflow-y-auto p-6 flex flex-col gap-4 animate-slide-in">
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-bold text-lg">Filter Products</span>
              <button onClick={() => setMobileSidebarOpen(false)} className="text-xl p-1"><FiX /></button>
            </div>
            <SidebarContent
              selectedCategory={selectedCategory}
              clearFilters={clearFilters}
              categories={categories}
              handleCategoryFilter={handleCategoryFilter}
              rating={rating}
              handleRating={handleRating}
              minInput={minInput}
              setminInput={setminInput}
              maxInput={maxInput}
              setmaxInput={setmaxInput}
              includeOutOfStock={includeOutOfStock}
              setIncludeOutOfStock={setIncludeOutOfStock}
              brands={brands}
              selectedBrands={selectedBrands}
              handleBrandFilter={handleBrandFilter}
            />
          </div>
        </div>
      )}

      {/* Top Header */}
      <div className="flex flex-col items-start w-full max-w-7xl mx-auto">
        <h1 className="text-[32px] md:text-[40px] font-normal leading-none">Fragrance</h1>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 mt-4">
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-[#9B9B9B] text-sm">Showing {displayProducts.length} of {totalCount} Items</p>
            <div className="h-4 w-[1px] bg-gray-300" />
            <button onClick={clearFilters} className="text-sm text-gray-500 hover:text-black transition-colors">Clear All</button>

            <div className="flex gap-2 flex-wrap">
              {selectedBrands.map((id) => (
                <button key={id} onClick={() => handleBrandFilter(id)} className="border border-gray-300 text-xs px-2 py-0.5 text-gray-500">
                  ✕ {brands.find((b) => b.id === id)?.name}
                </button>
              ))}
              {searchQuery && <span className="border border-gray-300 text-xs px-2 py-0.5 text-gray-500">🔍 "{searchQuery}"</span>}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full sm:w-52 z-20">
            <button onClick={() => setSortOpen(!sortOpen)} className="w-full h-[45px] border rounded-lg px-4 flex items-center bg-white justify-between gap-2 text-sm">
              <span className="truncate">
                {sortBy ? (sortBy === "price" ? (sortType === "asc" ? "Price: Low to High" : "Price: High to Low") : (sortType === "asc" ? "A to Z" : "Z to A")) : "Default Sorting"}
              </span>
              <FiChevronDown className={`transition-transform duration-300 ${sortOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {sortOpen && (
              <div className={`absolute top-[50px] bg-white left-0 w-full border rounded-lg shadow-md overflow-hidden transition-all duration-400 ease-out origin-top ${sortOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}>
                {[
                  { label: "Default Sorting", type: "" },
                  { label: "Price: Low to High", type: "low-high" },
                  { label: "Price: High to Low", type: "high-low" },
                  { label: "A to Z", type: "a-z" },
                  { label: "Z to A", type: "z-a" },
                ].map(({ label, type }) => (
                  <div key={type} onClick={() => { handleSort(type); setSortOpen(false); }} className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm">
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Section layout container splits */}
      <div className="flex gap-6 mt-8 justify-center items-start max-w-7xl mx-auto">
        {/* Desktop Sidebar Panel Viewports */}
        <div className="hidden md:flex w-[260px] min-w-[260px] flex-col gap-4">
          <SidebarContent
            selectedCategory={selectedCategory}
            clearFilters={clearFilters}
            categories={categories}
            handleCategoryFilter={handleCategoryFilter}
            rating={rating}
            handleRating={handleRating}
            minInput={minInput}
            setminInput={setminInput}
            maxInput={maxInput}
            setmaxInput={setmaxInput}
            includeOutOfStock={includeOutOfStock}
            setIncludeOutOfStock={setIncludeOutOfStock}
            brands={brands}
            selectedBrands={selectedBrands}
            handleBrandFilter={handleBrandFilter}
          />
        </div>

        {/* Product Display Area */}
        <div className="flex flex-col gap-6 flex-1 w-full ">
          {displayProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-96 text-gray-400 text-center px-4">
              <p className="text-xl md:text-2xl mb-2">No products found</p>
              <button onClick={clearFilters} className="mt-4 px-6 py-2 border border-black text-black rounded-full text-sm">Clear Filters</button>
            </div>
          ) : (
            <>
              {/* Responsive Columns Scaling Configuration applied here */}
              <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5">
                {displayProducts.slice(0, 12).map((product) => (
                  <ProductCard key={product.productId} product={product} onClick={() => setSelectedProduct(product)} />
                ))}
              </div>

              <AddBoard />

              {displayProducts.slice(12).length > 0 && (
                <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5">
                  {displayProducts.slice(12).map((product) => (
                    <ProductCard
                      key={product.productId}
                      product={product}
                      onClick={() => setSelectedProduct(product)}
                    />
                  ))}
                </div>
              )}
            </>
          )}

          {/* Pagination Controls Wrapper */}
          {totalPages > 1 && displayProducts.length > 1 && (
            <div className="flex items-center justify-center sm:justify-end gap-1 md:gap-2 mt-0 md:mt-10 flex-wrap">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)} className="p-3 border rounded-lg disabled:opacity-40">
                <FaChevronLeft size={12} />
              </button>
              {/* Remaining Page Mapping logic remains intact safely */}
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                if (Math.abs(page - currentPage) > 1 && page !== 1 && page !== totalPages) return null;
                return (
                  <button key={page} onClick={() => setCurrentPage(page)} className={`w-9 h-9 md:w-10 md:h-10 text-xs md:text-sm rounded-lg border ${currentPage === page ? "bg-black text-white" : "bg-white"}`}>
                    {page}
                  </button>
                );
              })}
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)} className="p-3 border rounded-lg disabled:opacity-40">
                <FaChevronRight size={12} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Product Detail Modal */}
    <SelectedProductMOdal
      selectedProduct={selectedProduct}
      setSelectedProduct={setSelectedProduct}
    />
  );
};

export default HomePage;