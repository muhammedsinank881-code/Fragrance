import React from 'react'

const SelectedProductMOdal = ({selectedProduct , setSelectedProduct}) => {
    if(!selectedProduct)
        return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white w-[90%] max-w-4xl rounded-2xl p-6 relative">
      
      <button
        onClick={() => setSelectedProduct(null)}
        className="absolute top-4 right-4 text-xl"
      >
        ✕
      </button>

      <div className="grid md:grid-cols-2 gap-6">
        
        <img
          src={JSON.parse(selectedProduct.images)[0]?.imageUrl}
          alt={selectedProduct.productName}
          className="w-full h-[400px] object-contain"
        />

        <div>
          <h2 className="text-3xl font-bold">
            {selectedProduct.productName}
          </h2>

          <p className="mt-4 text-gray-600">
            {selectedProduct.description?.replace(/<[^>]*>?/gm, "")}
          </p>

          <div className="mt-6">
            <span className="text-3xl font-bold">
              ₹ {selectedProduct.discountPrice || selectedProduct.price}
            </span>

            {selectedProduct.discountPrice > 0 && (
              <span className="ml-3 text-gray-500 line-through">
                ₹ {selectedProduct.price}
              </span>
            )}
          </div>

          <button className="mt-6 px-8 py-3 bg-black text-white rounded-full">
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  </div>
  )
}

export default SelectedProductMOdal
