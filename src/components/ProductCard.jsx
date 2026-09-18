import React, { useState } from 'react';
import { getVegetableFallbackSvg } from '../data/vegetables';

export default function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const fallbackSvg = getVegetableFallbackSvg(product.name, product.color);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setQuantity(1); // Reset back to 1
  };

  return (
    <article className="product-card" data-id={product.id}>
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={`${product.name} - Fresh Organic Vegetable`}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackSvg;
          }}
        />
        <span className="badge-organic">
          <svg viewBox="0 0 24 24">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
          </svg>
          {product.badge}
        </span>
        <span className="category-tag">{product.category}</span>
      </div>

      <div className="product-body">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-local-name">{product.localName}</span>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-price-row">
          <span className="price-currency">₹</span>
          <span className="price-value">{product.price}</span>
          <span className="price-unit">/ {product.unit}</span>
        </div>

        <div className="product-card-controls">
          <div className="quantity-stepper" role="group" aria-label={`Quantity for ${product.name}`}>
            <button 
              type="button" 
              className="step-btn btn-step-minus" 
              aria-label="Decrease quantity" 
              onClick={handleMinus}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="qty-display">{quantity}</span>
            <button 
              type="button" 
              className="step-btn btn-step-plus" 
              aria-label="Increase quantity" 
              onClick={handlePlus}
            >
              +
            </button>
          </div>

          <button 
            type="button" 
            className="btn-add-cart" 
            onClick={handleAdd}
          >
            <svg viewBox="0 0 24 24">
              <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
