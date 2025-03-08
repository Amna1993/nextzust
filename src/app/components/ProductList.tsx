// src/app/components/ProductList.tsx
"use client";

import { useCartStore } from "../store/cartStore";

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Headphones", price: 200 },
];

const ProductList = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">{product.name}</h4>
            <p className="text-gray-600">${product.price}</p>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
