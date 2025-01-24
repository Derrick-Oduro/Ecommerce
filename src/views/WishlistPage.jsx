import React, { useContext } from "react";
import { WishlistContext } from "./WishlistContext";
import { CartContext } from "./CartContext";
import { Trash2, ShoppingCart } from "lucide-react"; // Use modern icons

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600 mt-8">
          Your wishlist is empty. Add some jerseys you love!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-md shadow-md transition-transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <div className="flex justify-between items-center space-x-4">
                {/* Remove from Wishlist */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                >
                  <Trash2 className="w-5 h-5 mr-2" />
                  Remove
                </button>

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-500 transition duration-300"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
