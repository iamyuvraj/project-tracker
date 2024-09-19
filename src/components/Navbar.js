import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <NavLink to="/" className="logo">Project Tracker</NavLink>
                <ul className="nav-links">
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
                    <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                    <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
                    <li><NavLink to="/logout" activeClassName="active">Logout</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
