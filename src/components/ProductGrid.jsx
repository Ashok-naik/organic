import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onAddToCart, onResetFilters }) {
  if (products.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">
          <svg viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </div>
        <h3 className="no-results-title">No Vegetables Found</h3>
        <p className="no-results-text">We couldn't find any vegetable matching your current selection.</p>
        <button type="button" className="btn btn-outline" onClick={onResetFilters}>
          Reset All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="products-grid" id="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
