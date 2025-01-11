import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const cartItem = { ...item, cartItemId: Date.now() }; // Assign a unique cartItemId
    setCartItems([...cartItems, cartItem]);
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(cartItems.filter((item) => item.cartItemId !== cartItemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
