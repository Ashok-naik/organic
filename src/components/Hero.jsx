import React from 'react';

export default function Hero({ onWhatsAppInquiry }) {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        {/* Hero Left: Content */}
        <div className="hero-content">
          <div className="hero-pill">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
            </svg>
            <span>Direct Farm Harvest • Telangana</span>
          </div>

          <h1 className="hero-title">
            Fresh Organic Vegetables, <span className="highlight">Straight From Nature</span>
          </h1>

          <p className="hero-subtitle">
            Healthy, fresh and naturally grown vegetables for your everyday kitchen.
          </p>

          <div className="hero-actions">
            <a href="#vegetables" className="btn btn-primary">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>
              </svg>
              Shop Vegetables
            </a>

            <button type="button" className="btn btn-whatsapp" onClick={onWhatsAppInquiry}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.8 14.19c-.24.68-1.2 1.24-1.66 1.3-.43.06-.99.1-2.91-.71-2.31-.98-3.79-3.32-3.9-3.48-.12-.16-.94-1.25-.94-2.38s.59-1.69.8-1.92c.21-.24.47-.3.62-.3.16 0 .32 0 .45.01.15.01.35-.06.55.42.21.49.71 1.74.78 1.87.06.13.11.29.02.47-.09.18-.13.29-.26.44-.13.15-.28.34-.4.46-.13.13-.27.27-.12.53.15.26.68 1.12 1.45 1.81.99.88 1.83 1.16 2.09 1.29.26.13.42.11.57-.06.16-.18.68-.79.86-1.06.18-.27.37-.22.62-.13.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.72-.17 1.4z"/>
              </svg>
              Order on WhatsApp
            </button>
          </div>

          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="badge-item">
              <div className="badge-icon">
                <svg viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
              </div>
              <span className="badge-text">100% Fresh</span>
            </div>
            <div className="badge-item">
              <div className="badge-icon">
                <svg viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>
              </div>
              <span className="badge-text">Naturally Grown</span>
            </div>
            <div className="badge-item">
              <div className="badge-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <span className="badge-text">Farm Fresh</span>
            </div>
            <div className="badge-item">
              <div className="badge-icon">
                <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
              </div>
              <span className="badge-text">Quality Checked</span>
            </div>
          </div>
        </div>

        {/* Hero Right: Image Showcase */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80" 
              alt="Assorted fresh farm vegetables in basket" 
              className="hero-image"
              loading="eager"
            />
            <div className="floating-hero-card">
              <div className="fhc-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div>
                <div className="fhc-label">Daily Harvest</div>
                <div className="fhc-value">Telangana Direct</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
