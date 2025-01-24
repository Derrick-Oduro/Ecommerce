import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../views/CartContext"; // Adjust the import path based on your project structure
import { WishlistContext } from "../views/WishlistContext"; // Import WishlistContext

const Header = () => {
  const { cartItems } = useContext(CartContext); // Access cart items from context
  const { wishlist } = useContext(WishlistContext); // Access wishlist items from context
  const cartItemCount = cartItems.length; // Calculate the number of items in the cart
  const wishlistItemCount = wishlist.length; // Calculate the number of items in the wishlist

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow relative">
      <div className="text-2xl font-bold text-gray-800 relative">
        <img 
          src="\shopping-cart.png" 
          alt="Logo" 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 opacity-30" 
        />
        <Link to="/HomePage" className="relative">EPICART</Link>
      </div>
      <div className="flex space-x-6">
        <Link to="/HomePage" className="text-gray-600 hover:text-gray-800 transition-colors flex items-center">
          <img src="\home.png" alt="Home" className="w-6 h-6 mr-2" />
        
        </Link>
        <Link to="/ProductsPage" className="text-gray-600 hover:text-gray-800 transition-colors flex items-center">
          <img src="\box.png" alt="Products" className="w-6 h-6 mr-2" />
          
        </Link>
        <Link to="/CartPage" className="text-gray-600 hover:text-gray-800 transition-colors flex items-center">
          <img src="\shopping-cart.png" alt="Cart" className="w-6 h-6 mr-2" />
           {cartItemCount > 0 && <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">{cartItemCount}</span>}
        </Link>
        <Link to="/WishlistPage" className="text-gray-600 hover:text-gray-800 transition-colors flex items-center">
          <img src="\e-commerce.png" alt="Wishlist" className="w-6 h-6 mr-2" />
           {wishlistItemCount > 0 && <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">{wishlistItemCount}</span>}
        </Link>
        <Link to="/ProfilePage" className="text-gray-600 hover:text-gray-800 transition-colors flex items-center">
          <img src="\user.png" alt="Profile" className="w-6 h-6 mr-2" />
        
        </Link>
      </div>
    </header>
  );
};

export default Header;
