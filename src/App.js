import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./views/forms/SignUp";
import SignIn from "./views/forms/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./views/HomePage";
import ProductsPage from "./views/ProductsPage";
import CartPage from "./views/CartPage";
import ProfilePage from "./views/ProfilePage";
import WishlistPage from "./views/WishlistPage";
import Header from "./components/header";
import { CartProvider } from "./views/CartContext";
import WishlistProvider from "./views/WishlistContext";
// Import WishlistProvider
import "./css/App.css";

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        {" "}
        {/* Wrap the app with WishlistProvider */}
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/ProductsPage" element={<ProductsPage />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/WishlistPage" element={<WishlistPage />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/dashboard" element={<ProtectedRoute />} />
          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
