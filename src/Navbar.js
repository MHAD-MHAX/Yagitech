import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
          YAGITECH
          </Link>
        </div>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/calculator">Calculator</a></li>
            <li><a href="/products">Shop</a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
