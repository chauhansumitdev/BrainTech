// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><h4>BrainTech</h4></div>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
