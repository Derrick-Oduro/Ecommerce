import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to store user data
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    // Fetch user data on component mount
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/session", {
        credentials: "include", // Ensure credentials like cookies are sent
      });
      const data = await response.json();
      if (data.loggedIn) {
        setUser(data.user); // Set user data if logged in
      } else {
        setUser(null); // User not logged in
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null); // Clear user data on logout
      navigate("/signin"); // Redirect to SignIn page
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  if (!user) {
    // If no user is signed in, show Sign In button
    return (
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <p className="mb-4">You are not signed in.</p>
        <button
          onClick={() => navigate("/signin")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full mb-4 w-24 h-24"
        />
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <div className="space-y-4">
        <button
          onClick={() => navigate("/edit-profile")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
        >
          Edit Profile
        </button>
        <button
          onClick={() => navigate("/change-password")}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 w-full"
        >
          Change Password
        </button>
      </div>
      <div className="mt-6">
        <button
          onClick={() => setShowLogoutConfirm(true)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 w-full"
        >
          Logout
        </button>
        {showLogoutConfirm && (
          <div className="mt-4 bg-red-100 p-4 rounded-md">
            <p>Are you sure you want to logout?</p>
            <div className="flex justify-between mt-2">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
