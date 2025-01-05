import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  // State to track if the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle login
  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials!');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-page">
      {isLoggedIn ? (
        <div className="welcome-message">
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
