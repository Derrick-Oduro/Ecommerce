import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom"; // Import Link from react-router-dom


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // Include cookies or other credentials
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        // Redirect to another page or update UI here
        navigate("/HomePage");
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
        alert(errorData.message); // Show error to the user
      }
    } catch (err) {
      console.error("Error during fetch:", err.message);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="w-full max-w-xs">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                 Log In
             </h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-black hover:text-blue-700">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
