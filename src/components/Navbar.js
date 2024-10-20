

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <h1 className="logo">Gutenberg Books</h1>

//       <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//         <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
//         <li><Link to="/wishlist" onClick={() => setIsMenuOpen(false)}>Wishlist</Link></li>
//       </div>

//       <div className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
//         <div className="line1"></div>
//         <div className="line2"></div>
//         <div className="line3"></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import logo from "../../public/favicon.jpg"

import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img className="logo-img" src={`https://i.ibb.co.com/yNq8HHZ/favicon.png`} alt="logo" />
      </div>
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>All Books</Link></li>
          <li><Link to="/wishlist" onClick={() => setIsMenuOpen(false)}>Wishlist</Link></li>
        </ul>
      </div>
      <div className="navbar-auth">
        {isLoggedIn ? (
          <button onClick={toggleLogin}>Logout</button>
        ) : (
          <button onClick={toggleLogin}>Login</button>
        )}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
