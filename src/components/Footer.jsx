import React from 'react';
import { STORE_NAME, STORE_PHONE } from '../data/vegetables';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">{STORE_NAME}</div>
            <div className="footer-tagline">Fresh • Organic • Healthy</div>
            <p className="footer-desc">
              Bringing naturally grown, wholesome and farm-fresh organic vegetables to everyday households across Telangana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#vegetables" className="footer-link">Vegetables</a></li>
              <li><a href="#about" className="footer-link">About {STORE_NAME}</a></li>
              <li><a href="#why-us" className="footer-link">Why Organic</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Operating Area */}
          <div>
            <h4 className="footer-heading">Contact & Location</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href={`tel:${STORE_PHONE}`} style={{ color: '#ffffff', fontWeight: 700 }}>
                  {STORE_PHONE}
                </a>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Telangana, India</span>
              </div>
              <div className="footer-contact-item" style={{ color: 'var(--primary-soft)', fontSize: '0.82rem' }}>
                Daily Morning Harvest (6:00 AM – 8:00 PM)
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; 2026 {STORE_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
