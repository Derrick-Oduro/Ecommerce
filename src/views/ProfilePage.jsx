import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProfilePage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/session", {
        credentials: "include",
      })
      const data = await response.json()
      if (data.loggedIn) {
        setUser(data.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/logout", {
        method: "POST",
        credentials: "include",
      })
      setUser(null)
      navigate("/signin")
    } catch (error) {
      console.error("Failed to logout:", error)
    }
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Profile</h1>
        <p className="text-center mb-4">You are not signed in.</p>
        <button
          onClick={() => navigate("/signin")}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Sign In
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Profile</h1>
      <div className="flex flex-col items-center mb-6">
        {user.avatar ? (
          <img
            src={user.avatar || "/placeholder.svg"}
            alt={user.name}
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">{user.name[0].toUpperCase()}</span>
          </div>
        )}
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
      <div className="space-y-4">
        <button
          onClick={() => navigate("/edit-profile")}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Edit Profile
        </button>
        <button
          onClick={() => setShowLogoutConfirm(true)}
          className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
        >
          Logout
        </button>
      </div>
      {showLogoutConfirm && (
        <div className="mt-6 p-4 bg-red-100 rounded-md">
          <p className="mb-4 text-center">Are you sure you want to logout?</p>
          <div className="flex justify-between">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Yes, Logout
            </button>
            <button
              onClick={() => setShowLogoutConfirm(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfilePage

