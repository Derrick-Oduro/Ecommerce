import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-gray-800">
        <Link to="/HomePage">EPICART</Link>
      </div>
      <div className="flex space-x-6">
        <Link to="/ProductsPage" className="text-gray-600 hover:text-gray-800 transition-colors">
          Products
        </Link>
        <Link to="/CartPage" className="text-gray-600 hover:text-gray-800 transition-colors">
          Cart
        </Link>
        <Link to="/ProfilePage" className="text-gray-600 hover:text-gray-800 transition-colors">
          Profile
        </Link>
      </div>
    </header>
  );
};

export default Header;
