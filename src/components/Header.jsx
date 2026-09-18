import React, { useState, useEffect } from 'react';
import { STORE_NAME, STORE_PHONE } from '../data/vegetables';

export default function Header({ 
  totalItemsCount, 
  onOpenCart, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="site-header">
      <div className="container header-container">
        {/* Left: Logo & Tagline */}
        <a href="#hero" className="brand" aria-label={`${STORE_NAME} Homepage`}>
          <div className="brand-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
            </svg>
          </div>
          <div className="brand-info">
            <span className="brand-name">{STORE_NAME}</span>
            <span className="brand-tagline">Fresh • Organic • Healthy</span>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <nav className="nav-menu" aria-label="Main Navigation">
          <a href="#hero" className="nav-link active">Home</a>
          <a href="#vegetables" className="nav-link">Vegetables</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#why-us" className="nav-link">Why Organic</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Right: Action Buttons */}
        <div className="header-actions">
          {/* Call Shortcut */}
          <a href={`tel:${STORE_PHONE}`} className="header-call-btn" title={`Call ${STORE_NAME} at ${STORE_PHONE}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>{STORE_PHONE}</span>
          </a>

          {/* Cart Trigger Button */}
          <button 
            type="button" 
            className="action-btn" 
            onClick={onOpenCart}
            aria-label="View Shopping Basket"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
            {totalItemsCount > 0 && (
              <span className="cart-badge">{totalItemsCount}</span>
            )}
          </button>

          {/* Mobile Hamburger */}
          <button 
            type="button" 
            className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
