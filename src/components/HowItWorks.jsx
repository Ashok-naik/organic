import React from 'react';

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Simple 3 Steps</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-desc">Ordering fresh organic produce has never been simpler</p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3 className="step-title">Choose Your Vegetables</h3>
            <p className="step-desc">Browse through our farm-fresh catalog, filter by categories, or search your favorite ingredients.</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3 className="step-title">Add Them to Your Cart</h3>
            <p className="step-desc">Pick your desired quantity in kilograms or bunches and review your fresh basket totals.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3 className="step-title">Order Through WhatsApp</h3>
            <p className="step-desc">Click place order to auto-generate your clean order message and confirm directly with us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
