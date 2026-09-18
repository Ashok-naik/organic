import React from 'react';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type || 'success'}`}>
          {toast.type === 'info' ? (
            <svg style={{ width: '18px', height: '18px', fill: '#f4a261', flexShrink: 0 }} viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          ) : (
            <svg style={{ width: '18px', height: '18px', fill: '#52b788', flexShrink: 0 }} viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          )}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
