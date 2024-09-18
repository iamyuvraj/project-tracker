// RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css'; // Import the new CSS file

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // API call for registration here
    navigate('/login'); // Navigate to the login page after successful registration
  };

  return (
    <div className="register-container">
      <header className="header">
        <h1>Project Tracker</h1>
        <p>Create your account.</p>
      </header>
      <main className="main-content">
        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Name"
            required
            className="register-input"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="register-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="register-input"
          />
          <button type="submit" className="cta-button">Register</button>
        </form>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Project Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default RegisterPage;
