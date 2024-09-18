import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="header">
        <h1>Project Tracker</h1>
        <p>Track your projects effortlessly.</p>
        <div className="cta-buttons">
          <Link to="/login">
            <button className="cta-button">Log In</button>
          </Link>
          <Link to="/register">
            <button className="cta-button">Register</button>
          </Link>
        </div>
      </header>
      <main className="main-content">
      </main>
      <footer className="footer">
        <p>&copy; 2024 Project Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
