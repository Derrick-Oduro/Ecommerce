import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/session", {
      credentials: "include", // Include session cookies
    })
      .then((response) => response.json())
      .then((data) => {
        setLoggedIn(data.loggedIn);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error checking session:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return loggedIn ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
