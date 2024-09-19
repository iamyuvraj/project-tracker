import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Routes that require the Navbar */}
        <Route element={<NavbarLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

// NavbarLayout component to wrap protected routes
const NavbarLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default App;
