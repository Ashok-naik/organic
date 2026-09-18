import React from 'react';
import { STORE_PHONE, getVegetableFallbackSvg } from '../data/vegetables';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  subtotal,
  delivery,
  grandTotal,
  totalItemsCount,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onPlaceOrder
}) {
  return (
    <>
      <div 
        className={`cart-backdrop ${isOpen ? 'open' : ''}`} 
        onClick={onClose} 
        aria-hidden="true"
      />

      <aside 
        className={`cart-drawer ${isOpen ? 'open' : ''}`} 
        role="dialog" 
        aria-labelledby="cart-title" 
        aria-modal="true"
      >
        {/* Cart Header */}
        <div className="cart-header">
          <div className="cart-title-wrap">
            <h3 className="cart-title" id="cart-title">Your Basket</h3>
            <span className="cart-count-pill" id="cart-items-count-pill">
              {totalItemsCount} item{totalItemsCount === 1 ? '' : 's'}
            </span>
          </div>
          <button 
            type="button" 
            className="cart-close-btn" 
            onClick={onClose} 
            aria-label="Close Shopping Basket"
          >
            <svg viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        {/* Scrollable Items Container */}
        <div className="cart-items-container">
          {cart.length === 0 ? (
            /* Empty State Container */
            <div className="cart-empty-state">
              <div className="empty-cart-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <h4 className="empty-cart-title">Your cart is empty</h4>
              <p className="empty-cart-desc">Your basket is waiting for fresh, naturally grown vegetables!</p>
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={() => {
                  onClose();
                  const el = document.getElementById('vegetables');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            /* Active Cart Items List */
            <div className="cart-items-list">
              {cart.map(({ product, quantity }) => {
                const itemTotal = product.price * quantity;
                const fallback = getVegetableFallbackSvg(product.name, product.color);

                return (
                  <div key={product.id} className="cart-item">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="cart-item-thumb"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = fallback;
                      }}
                    />
                    <div className="cart-item-details">
                      <h4 className="cart-item-name">{product.name}</h4>
                      <div className="cart-item-rate">₹{product.price} / {product.unit}</div>
                      <div className="cart-item-bottom">
                        <div className="cart-item-stepper">
                          <button 
                            type="button" 
                            className="cart-step-btn" 
                            aria-label="Decrease quantity" 
                            onClick={() => onUpdateQty(product.id, -1)}
                          >
                            -
                          </button>
                          <span className="cart-item-qty">{quantity}</span>
                          <button 
                            type="button" 
                            className="cart-step-btn" 
                            aria-label="Increase quantity" 
                            onClick={() => onUpdateQty(product.id, 1)}
                          >
                            +
                          </button>
                        </div>
                        <div className="cart-item-total">₹{itemTotal}</div>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      className="cart-item-remove" 
                      aria-label={`Remove ${product.name} from basket`}
                      onClick={() => onRemoveItem(product.id)}
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Cart Footer / Summary */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span>Subtotal:</span>
              <strong>₹{subtotal}</strong>
            </div>
            <div className="cart-summary-row">
              <span>Delivery:</span>
              <strong>₹{delivery}</strong>
            </div>
            <div className="cart-summary-row total-row">
              <span>Total:</span>
              <span className="total-amount">₹{grandTotal}</span>
            </div>

            <div className="cart-delivery-note">
              <svg style={{ width: '14px', height: '14px', fill: 'var(--primary)', flexShrink: 0 }} viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              <span>Standard local home delivery charge ₹30 included.</span>
            </div>

            <div className="cart-actions">
              <button 
                type="button" 
                className="btn-whatsapp-order" 
                onClick={onPlaceOrder}
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.8 14.19c-.24.68-1.2 1.24-1.66 1.3-.43.06-.99.1-2.91-.71-2.31-.98-3.79-3.32-3.9-3.48-.12-.16-.94-1.25-.94-2.38s.59-1.69.8-1.92c.21-.24.47-.3.62-.3.16 0 .32 0 .45.01.15.01.35-.06.55.42.21.49.71 1.74.78 1.87.06.13.11.29.02.47-.09.18-.13.29-.26.44-.13.15-.28.34-.4.46-.13.13-.27.27-.12.53.15.26.68 1.12 1.45 1.81.99.88 1.83 1.16 2.09 1.29.26.13.42.11.57-.06.16-.18.68-.79.86-1.06.18-.27.37-.22.62-.13.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.72-.17 1.4z"/>
                </svg>
                Place Order on WhatsApp
              </button>

              <a href={`tel:${STORE_PHONE}`} className="cart-call-link">
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Or Call to Order: {STORE_PHONE}
              </a>

              <div style={{ textAlign: 'center', marginTop: '4px' }}>
                <button
                  type="button"
                  onClick={onClearCart} 
                  style={{ 
                    fontSize: '0.78rem', 
                    color: 'var(--text-light)', 
                    textDecoration: 'underline',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Clear Basket
                </button>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
