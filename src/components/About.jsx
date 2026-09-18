import React from 'react';
import { STORE_NAME } from '../data/vegetables';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        {/* About Image */}
        <div className="about-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" 
            alt="Fresh organic vegetable market produce" 
            className="about-image"
            loading="lazy"
          />
        </div>

        {/* About Content */}
        <div className="about-content">
          <span className="section-pill">Our Commitment</span>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>About {STORE_NAME}</h2>
          
          <p className="about-quote">
            "{STORE_NAME} is committed to bringing fresh, quality and naturally grown vegetables to your kitchen. We focus on freshness, quality and healthy food choices for families."
          </p>

          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
            Based in <strong>Telangana, India</strong>, our vegetable store connects conscientious home cooks with authentic, wholesome produce. Every crate is carefully inspected to ensure you and your loved ones enjoy the true taste, crunch, and nutritional benefits of farm-to-table cooking.
          </p>

          <div className="about-details">
            <div className="about-detail-card">
              <h4>Telangana Local Harvest</h4>
              <p>Sourced directly with care to minimize handling time and ensure maximum crunch.</p>
            </div>
            <div className="about-detail-card">
              <h4>No Middlemen Markup</h4>
              <p>Direct pricing that remains fair and transparent for both you and our growers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
