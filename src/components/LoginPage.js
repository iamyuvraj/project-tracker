// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the new CSS file

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // API call for login here
    navigate('/dashboard'); // Navigate to the dashboard after successful login
  };

  return (
    <div className="login-container">
      <header className="header">
        <h1>Project Tracker</h1>
        <p>Log in to your account.</p>
      </header>
      <main className="main-content">
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-Mail"
            required
            className="login-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-input"
          />
          <button type="submit" className="cta-button">Log In</button>
        </form>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Project Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LoginPage;
