import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>The HairCare Spa</h1>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-items">
            <li className="navbar-item">
              <a href="#home" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#services" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About Us
              </a>
            </li>
            <li className="navbar-item">
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>
                Reviews
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
