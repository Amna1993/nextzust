// src/app/page.tsx
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Shopping Cart with Zustand</h1>
      <ProductList />
      <Cart />
    </div>
  );
}
