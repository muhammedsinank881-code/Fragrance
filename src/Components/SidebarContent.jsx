import React from 'react'

const SidebarContent = ({
    selectedCategory,
    clearFilters,
    categories,
    handleCategoryFilter,
    rating,
    handleRating,
    minInput,
    setminInput,
    maxInput,
    setmaxInput,
    includeOutOfStock,
    setIncludeOutOfStock,
    brands,
    selectedBrands,
    handleBrandFilter,
}) => {
    return (
        <>
            {/* Category */}
            <div className="bg-white shadow-xl rounded-2xl p-5 border border-[#EEEEEE]">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-[20px] md:text-[24px] font-medium">FRAGRANCE</h3>
                    {selectedCategory.length > 0 && (
                        <button className="text-[10px] text-gray-400 hover:text-black transition-colors" onClick={clearFilters}>
                            Clear
                        </button>
                    )}
                </div>
                <div className="flex flex-col gap-3 text-[15px]">
                    {categories.map((item) => (
                        <label key={item.id} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={selectedCategory.includes(item.id)} onChange={() => handleCategoryFilter(item.id)} />
                            {item.name}
                        </label>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div className="bg-white shadow-xl rounded-2xl p-5 border border-[#EEEEEE]">
                <h3 className="text-[20px] md:text-[24px] font-medium mb-5">FILTER BY RATING</h3>
                <div className="flex flex-col gap-3">
                    {[5, 4, 3, 2, 1].map((star) => (
                        <label key={star} className="flex items-center gap-2 text-[15px] cursor-pointer">
                            <input type="checkbox" checked={rating === star} onChange={() => handleRating(star)} />
                            <span className="text-[#E6B325]">
                                {"★".repeat(star)}
                                <span className="text-gray-300">{"★".repeat(5 - star)}</span>
                            </span>
                            <span className="text-gray-500">({star} Star)</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="bg-white shadow-xl rounded-2xl p-5 border border-[#EEEEEE]">
                <h3 className="text-[20px] md:text-[24px] font-medium mb-5">PRICE</h3>
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Min Price"
                        value={minInput}
                        onChange={(e) => setminInput(e.target.value)}
                        className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Max Price"
                        value={maxInput}
                        onChange={(e) => setmaxInput(e.target.value)}
                        className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400 w-full"
                    />
                </div>
            </div>

            {/* Availability */}
            <div className="bg-white shadow-xl rounded-2xl p-5 border border-[#EEEEEE]">
                <h3 className="text-[20px] md:text-[24px] font-medium mb-5">AVAILABILITY</h3>
                <label className="flex items-center gap-2 text-[15px] cursor-pointer">
                    <input type="checkbox" checked={includeOutOfStock} onChange={(e) => setIncludeOutOfStock(e.target.checked)} />
                    Include out of stock
                </label>
                {!includeOutOfStock && <p className="text-[11px] text-gray-400 mt-2">Hiding out-of-stock items (display only)</p>}
            </div>

            {/* Brands */}
            <div className="bg-white shadow-xl rounded-2xl p-5 border border-[#EEEEEE]">
                <h3 className="text-[20px] md:text-[24px] font-medium mb-5">BRANDS</h3>
                <div className="flex flex-col gap-3 text-[15px]">
                    {brands.map((item) => (
                        <label key={item.id} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={selectedBrands.includes(item.id)} onChange={() => handleBrandFilter(item.id)} />
                            {item.name}
                        </label>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SidebarContent