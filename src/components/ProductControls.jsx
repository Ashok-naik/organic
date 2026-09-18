import React from 'react';

export default function ProductControls({ 
  searchQuery, 
  onSearchChange, 
  onClearSearch, 
  sortBy, 
  onSortChange,
  resultsCount 
}) {
  return (
    <div>
      <div className="controls-bar">
        {/* Search Input */}
        <div className="search-box-wrapper">
          <svg className="search-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>

          <input 
            type="search" 
            id="search-input" 
            className="search-box" 
            placeholder="Search vegetables (e.g. Tomato, Spinach, Aloo)..." 
            aria-label="Search vegetables"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />

          {searchQuery.trim().length > 0 && (
            <button 
              type="button" 
              className="search-clear-btn visible" 
              onClick={onClearSearch} 
              aria-label="Clear search input"
            >
              ✕
            </button>
          )}
        </div>

        {/* Sorting Dropdown */}
        <div className="sort-wrapper">
          <label htmlFor="sort-select" className="sort-label">Sort by:</label>
          <select 
            id="sort-select" 
            className="sort-select" 
            aria-label="Sort products"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
          </select>
        </div>
      </div>

      {/* Results Meta */}
      <div className="results-meta">
        <span>Showing {resultsCount} fresh vegetable{resultsCount === 1 ? '' : 's'}</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>✓ Updated Daily</span>
      </div>
    </div>
  );
}
