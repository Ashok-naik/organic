import React from 'react';
import { CATEGORIES } from '../data/vegetables';

export default function Categories({ activeCategory, onSelectCategory }) {
  return (
    <section className="categories-section" id="categories">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Browse By Type</span>
          <h2 className="section-title">Vegetable Categories</h2>
          <p className="section-desc">Select a category below to filter our daily harvested produce</p>
        </div>

        <div className="category-nav" role="tablist" aria-label="Vegetable Categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat === 'All' ? 'All Vegetables' : cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
