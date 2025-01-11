import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./views/forms/SignUp";
import SignIn from "./views/forms/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./views/HomePage";
import ProductsPage from "./views/ProductsPage";
import CartPage from "./views/CartPage";
import ProfilePage from "./views/ProfilePage";
import { CartProvider } from "./views/CartContext";
import Header from "./components/header"; // Reusable Header Component
import "./css/App.css";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/dashboard" element={<ProtectedRoute />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
