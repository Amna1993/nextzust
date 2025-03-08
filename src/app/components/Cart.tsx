// src/app/components/Cart.tsx
"use client";

import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const { items, total, updateQuantity, removeFromCart } = useCartStore();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="mt-4 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-gray-600">${item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 bg-green-500 text-white rounded">+</button>
                <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 bg-red-500 text-white rounded">-</button>
                <button onClick={() => removeFromCart(item.id)} className="px-3 py-1 bg-gray-500 text-white rounded">Remove</button>
              </div>
            </div>
          ))}
          <h3 className="text-xl font-semibold">Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
