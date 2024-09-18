// Dashboard.js
import React from 'react';
import './Dashboard.css'; // Import the new CSS file

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Welcome to Your Dashboard</h1>
        <p>Manage your projects efficiently.</p>
      </header>
      <main className="main-content">
        <div className="card">
          <h2>Your Projects</h2>
          <p>Here you can view and manage all your projects.</p>
          {/* Add more content or components related to projects */}
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Project Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;
