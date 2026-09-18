import React from 'react';
import { STORE_NAME, STORE_PHONE } from '../data/vegetables';

export default function MobileNav({ isOpen, onClose, onWhatsAppInquiry }) {
  return (
    <aside className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
      <div className="mobile-nav-list">
        <a href="#hero" className="mobile-nav-link" onClick={onClose}>
          Home <span>→</span>
        </a>
        <a href="#vegetables" className="mobile-nav-link" onClick={onClose}>
          Vegetables <span>→</span>
        </a>
        <a href="#about" className="mobile-nav-link" onClick={onClose}>
          About {STORE_NAME} <span>→</span>
        </a>
        <a href="#why-us" className="mobile-nav-link" onClick={onClose}>
          Why Organic <span>→</span>
        </a>
        <a href="#how-it-works" className="mobile-nav-link" onClick={onClose}>
          How It Works <span>→</span>
        </a>
        <a href="#contact" className="mobile-nav-link" onClick={onClose}>
          Contact Store <span>→</span>
        </a>
      </div>

      <div className="mobile-nav-footer">
        <a href={`tel:${STORE_PHONE}`} className="btn btn-outline" style={{ width: '100%' }}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Call {STORE_PHONE}
        </a>

        <button 
          type="button" 
          className="btn btn-whatsapp" 
          onClick={() => { onClose(); onWhatsAppInquiry(); }}
          style={{ width: '100%' }}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.8 14.19c-.24.68-1.2 1.24-1.66 1.3-.43.06-.99.1-2.91-.71-2.31-.98-3.79-3.32-3.9-3.48-.12-.16-.94-1.25-.94-2.38s.59-1.69.8-1.92c.21-.24.47-.3.62-.3.16 0 .32 0 .45.01.15.01.35-.06.55.42.21.49.71 1.74.78 1.87.06.13.11.29.02.47-.09.18-.13.29-.26.44-.13.15-.28.34-.4.46-.13.13-.27.27-.12.53.15.26.68 1.12 1.45 1.81.99.88 1.83 1.16 2.09 1.29.26.13.42.11.57-.06.16-.18.68-.79.86-1.06.18-.27.37-.22.62-.13.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.72-.17 1.4z"/>
          </svg>
          WhatsApp Order
        </button>
      </div>
    </aside>
  );
}
