import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../views/CartContext"; // Adjust the import path based on your project structure

const Header = () => {
  const { cartItems } = useContext(CartContext); // Access cart items from context
  const cartItemCount = cartItems.length; // Calculate the number of items in the cart

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-gray-800">
        <Link to="/HomePage">EPICART</Link>
      </div>
      <div className="flex space-x-6">
        <Link to="/HomePage" className="text-gray-600 hover:text-gray-800 transition-colors">
          Home
        </Link>
        <Link to="/ProductsPage" className="text-gray-600 hover:text-gray-800 transition-colors">
          Products
        </Link>
        <Link to="/CartPage" className="text-gray-600 hover:text-gray-800 transition-colors">
          Cart {cartItemCount > 0 && <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">{cartItemCount}</span>}
        </Link>
        <Link to="/ProfilePage" className="text-gray-600 hover:text-gray-800 transition-colors">
          Profile
        </Link>
      </div>
    </header>
  );
};

export default Header;
