import React, { useState } from 'react';
import { STORE_NAME, STORE_PHONE } from '../data/vegetables';

export default function Contact({ onWhatsAppInquiry, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name) {
      onShowToast('Please enter your name', 'info');
      return;
    }

    const cleanedPhone = phone.replace(/\D/g, '');
    if (!cleanedPhone || cleanedPhone.length < 10) {
      onShowToast('Please enter a valid 10-digit mobile number', 'info');
      return;
    }

    if (!message) {
      onShowToast('Please enter your message or query', 'info');
      return;
    }

    onShowToast(`Thank you, ${name}! We received your inquiry and will call you at ${cleanedPhone} shortly.`, 'success');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Information Left */}
          <div className="contact-info-pane">
            <div>
              <span style={{ fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--primary-soft)' }}>
                Get in Touch
              </span>
              <h2 className="contact-store-name">{STORE_NAME}</h2>
              <div className="contact-store-tag">Organic Vegetable Store</div>

              <div className="contact-details-list">
                <div className="contact-row">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-label">Location</div>
                    <div className="contact-val">Telangana, India</div>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-label">Phone Support</div>
                    <div className="contact-val">{STORE_PHONE}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a href={`tel:${STORE_PHONE}`} className="btn btn-primary" style={{ background: '#ffffff', color: 'var(--primary-dark)' }}>
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call Now
              </a>
              <button type="button" className="btn btn-whatsapp" onClick={onWhatsAppInquiry}>
                <svg viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.8 14.19c-.24.68-1.2 1.24-1.66 1.3-.43.06-.99.1-2.91-.71-2.31-.98-3.79-3.32-3.9-3.48-.12-.16-.94-1.25-.94-2.38s.59-1.69.8-1.92c.21-.24.47-.3.62-.3.16 0 .32 0 .45.01.15.01.35-.06.55.42.21.49.71 1.74.78 1.87.06.13.11.29.02.47-.09.18-.13.29-.26.44-.13.15-.28.34-.4.46-.13.13-.27.27-.12.53.15.26.68 1.12 1.45 1.81.99.88 1.83 1.16 2.09 1.29.26.13.42.11.57-.06.16-.18.68-.79.86-1.06.18-.27.37-.22.62-.13.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.72-.17 1.4z"/>
                </svg>
                WhatsApp Order
              </button>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="contact-form-pane">
            <h3 className="form-title">Send Us a Message</h3>
            <p className="form-desc">Have a question about today's fresh arrival or custom quantity orders? Send us a quick note below.</p>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  className="form-input" 
                  placeholder="e.g. Ramesh Reddy" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone" className="form-label">Mobile Number *</label>
                <input 
                  type="tel" 
                  id="contact-phone" 
                  className="form-input" 
                  placeholder="10-digit mobile (e.g. 9876543210)" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message / Vegetable Inquiries *</label>
                <textarea 
                  id="contact-message" 
                  className="form-textarea" 
                  placeholder="Tell us which vegetables you are looking for..." 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
