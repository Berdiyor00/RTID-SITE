import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../Image/RTID logo2 (3).png'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="RTID Logo" className="logo-image" />
        </div>
        
        <button 
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
        
          <a href="#services">Xizmatlar</a>
          <a href="#addresses">Manzillar</a>
          <a href="#contacts">Bog'lanish</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
