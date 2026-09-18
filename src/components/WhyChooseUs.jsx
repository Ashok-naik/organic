import React from 'react';
import { STORE_NAME } from '../data/vegetables';

export default function WhyChooseUs() {
  return (
    <section className="why-section" id="why-us">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">The {STORE_NAME} Promise</span>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-desc">What makes our organic vegetable store the preferred choice for kitchens across Telangana</p>
        </div>

        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon-wrap">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
              </svg>
            </div>
            <h3 className="feature-title">Fresh Every Day</h3>
            <p className="feature-desc">Freshly selected vegetables for your kitchen, picked daily to retain natural aroma and vital nutrients.</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon-wrap">
              <svg viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
              </svg>
            </div>
            <h3 className="feature-title">Natural Quality</h3>
            <p className="feature-desc">Focus on naturally grown and quality produce cultivated with sustainable soil care practices.</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon-wrap">
              <svg viewBox="0 0 24 24">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
            </div>
            <h3 className="feature-title">Fair Pricing</h3>
            <p className="feature-desc">Transparent and reasonable pricing with zero hidden costs, offering the best value for healthy families.</p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <div className="feature-icon-wrap">
              <svg viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.8 14.19c-.24.68-1.2 1.24-1.66 1.3-.43.06-.99.1-2.91-.71-2.31-.98-3.79-3.32-3.9-3.48-.12-.16-.94-1.25-.94-2.38s.59-1.69.8-1.92c.21-.24.47-.3.62-.3.16 0 .32 0 .45.01.15.01.35-.06.55.42.21.49.71 1.74.78 1.87.06.13.11.29.02.47-.09.18-.13.29-.26.44-.13.15-.28.34-.4.46-.13.13-.27.27-.12.53.15.26.68 1.12 1.45 1.81.99.88 1.83 1.16 2.09 1.29.26.13.42.11.57-.06.16-.18.68-.79.86-1.06.18-.27.37-.22.62-.13.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.72-.17 1.4z"/>
              </svg>
            </div>
            <h3 className="feature-title">Easy Ordering</h3>
            <p className="feature-desc">Order easily through WhatsApp or phone with a few taps. We prepare your order with utmost care.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
