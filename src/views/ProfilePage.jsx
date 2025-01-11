import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session data if necessary (optional)
    navigate("/signin"); // Redirect to the SignIn page after logout
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      {/* You can display the user's name, email, or any other details if you like */}
      <div className="mb-4">
        <p><strong>Welcome to your profile!</strong></p>
        {/* Display any profile-related content here */}
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
