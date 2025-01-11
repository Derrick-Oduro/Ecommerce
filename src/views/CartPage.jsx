import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handleRemove = (cartItemId) => {
    removeFromCart(cartItemId); // Use cartItemId for removal
  };

  const handleBuy = () => {
    setShowPhoneNumber(true);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.cartItemId} className="py-2 border-b flex justify-between items-center">
              <div>
                {item.name} - ${item.price}
              </div>
              <button
                onClick={() => handleRemove(item.cartItemId)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          Your cart is empty.{' '}
          <a href="/ProductsPage" className="text-blue-500">
            Go back to products.
          </a>
        </p>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Total: ${totalPrice}</h2>
          <button
            onClick={handleBuy}
            className={`mt-4 px-6 py-2 rounded-md ${
              showPhoneNumber ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {showPhoneNumber ? '0594042521' : 'Buy'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
