import React from "react";
import { FiHeart } from "react-icons/fi";

const ProductCard = ({ product , onClick}) => {
  const imageUrl = (() => {
    try { return JSON.parse(product.images)[0]?.imageUrl; } catch { return null; }
  })();

  const cleanDescription = product.description?.replace(/<[^>]*>?/gm, "")?.replace(/&nbsp;/g, " ");

  return (
    <div
    onClick={onClick}
     className="border border-[#DADADA] rounded-[18px] p-2 bg-white shadow-md flex flex-col justify-between ">
      <div>
        {/* Image Box Container */}
        <div className="relative bg-[#DEDDD9] rounded-[14px] aspect-square overflow-hidden flex items-center justify-center p-4">
          {product.isTrending && (
            <div className="absolute top-2 left-2 border border-[#E6B325] text-[#E6B325] text-[10px] md:text-xs px-2 py-0.5 rounded-md bg-white">
              trending
            </div>
          )}
          <button className="absolute top-2 right-2 border border-black w-7 h-7 rounded-md flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all">
            <FiHeart size={14} />
          </button>
          
          {imageUrl ? (
            <img src={imageUrl} alt={product.productName} className="max-w-[60%] max-h-[75%] object-contain" />
          ) : (
            <div className="text-gray-300 text-xs">No Image</div>
          )}
        </div>

        {/* Rating Row metadata */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-[#E6B325] text-xs md:text-sm">★★★★☆</span>
          <span className="text-gray-400 text-xs">(124)</span>
        </div>

        {/* Title Content */}
        <h3 className="text-[13px] md:text-[14px] mt-1.5 leading-tight font-medium line-clamp-1">
          {product.productName}
        </h3>

        {/* Description Snippet text */}
        <p className="text-[11px] md:text-[12px] text-[#4A4A4A] leading-tight line-clamp-2 min-h-[32px] md:min-h-[36px] mt-1">
          {cleanDescription}
        </p>
      </div>

      <div>
        {/* Pricing values formatting blocks */}
        <div className="flex items-center gap-2 mt-0 md:mt-3 flex-wrap">
          {product.discountPrice > 0 ? (
            <>
              <span className="line-through text-gray-500 text-[14px] md:text-[16px]">₹ {product.price}</span>
              <span className="font-semibold text-[18px] md:text-[20px]">₹ {product.discountPrice}</span>
            </>
          ) : (
            <span className="font-semibold text-[18px] md:text-[20px]">₹ {product.price}</span>
          )}
        </div>

        {/* Action Button CTA */}
        <button className="w-full p-2 md:p-2 rounded-full border border-gray-700 mt-3 text-[13px] md:text-[16px] hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-lg hover:scale-105   hover:-translate-y-1">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;