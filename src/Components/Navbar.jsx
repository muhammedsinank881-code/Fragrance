import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/Logo.svg?react";
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import { ProductContext } from "../context/ProductContext";
import { useDebounce } from "../hooks/useDebounce";

const Navbar = () => {
  const { setSearchQuery } = useContext(ProductContext);
  const [inputValue, setInputValue] = useState("");
  const debouncedSearch = useDebounce(inputValue, 500);

  useEffect(() => {
    setSearchQuery(debouncedSearch);
  }, [debouncedSearch, setSearchQuery]);

  return (
    <div className="w-full bg-[#E4E4E4] py-4 md:py-6 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
      
      {/* Top row elements for mobile alignment */}
      <div className="w-full md:w-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-[30px] md:text-[40px] font-bold leading-none">
          <Logo className="h-[50px] md:h-[80px]" />
        </div>
        
        {/* Mobile Right Section Icons (Duplicates visibility layout actions safely) */}
        <div className="flex md:hidden items-center gap-4 text-[20px]">
          <FiUser className="cursor-pointer" />
          <FiHeart className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <FiShoppingCart />
            <div className="absolute -top-2 -right-2 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">1</div>
          </div>
        </div>
      </div>

      {/* Middle Search & Nav Section */}
      <div className="w-full md:mx-10 flex flex-col lg:flex-row lg:items-center justify-between p-2 md:px-6 md:border border-[#464646] rounded-xl gap-2 lg:gap-8">
        <div className="flex items-center gap-8 w-full">
          <div className="rounded-md w-full">
            {/* Search Bar */}
            <div className="flex items-center border border-[#464646] rounded-sm px-3 h-[36px] w-full bg-[#E4E4E4]">
              <FiSearch className="text-gray-500 text-sm" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search For Perfumes"
                className="bg-transparent outline-none text-sm ml-2 w-full"
              />
              {inputValue && (
                <button
                  onClick={() => setInputValue("")}
                  className="text-gray-400 hover:text-gray-600 text-xs ml-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Nav Links - hidden on small mobile, scrollable on tablets */}
            <div className="hidden sm:flex items-center gap-4 md:gap-8 mt-3 text-[14px] md:text-[15px] text-[#2F2F2F] overflow-x-auto whitespace-nowrap pb-1">
              <div className="flex items-center gap-1 cursor-pointer">
                <span>For Him</span><FiChevronDown className="text-sm" />
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <span>For Her</span><FiChevronDown className="text-sm" />
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Products</span><FiChevronDown className="text-sm" />
              </div>
              <span className="cursor-pointer">Story</span>
              <span className="cursor-pointer">About</span>
              <span className="text-gray-400 cursor-pointer">Help</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section Desktop only */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6 text-[15px] font-semibold shrink-0">
        <div className="flex items-center gap-2 cursor-pointer">
          <FiUser className="text-[16px]" /><span>Register</span>
        </div>
        <div className="w-[1px] h-4 bg-gray-400" />
        <span className="cursor-pointer text-base shrink-0">Sign In</span>
        <div className="w-[1px] h-4 bg-gray-400" />
        <FiHeart className="text-[22px] cursor-pointer" />
        <div className="w-[1px] h-4 bg-gray-400" />
        <div className="relative cursor-pointer">
          <FiShoppingCart className="text-[22px]" />
          <div className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;