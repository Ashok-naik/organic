# Khammam Vegitables - React + Vite Organic Store

A modern, attractive, and responsive organic vegetable e-commerce web application built with **React 18 + Vite** (zero heavy CSS frameworks, custom modern design tokens).

---

## 🌿 Business Details
- **Firm Name:** Khammam Vegitables
- **Business Type:** Organic Vegetable Store
- **Contact Number:** `9000420062`
- **Location:** Telangana, India
- **Tagline:** Fresh • Organic • Healthy

---

## 🚀 Key Features

1. **Modern React Architecture:**
   - Single Page Application (SPA) powered by **Vite** and **React 18**.
   - Modular component structure with clean separations of concerns.
   - Blazing fast hot-module replacement (HMR) during development.

2. **Full Product Catalog (22 Fresh Vegetables):**
   - High-resolution, appetizing vegetable imagery with automatic SVG fallback generation for offline resilience.
   - Organic badges, local names (e.g., *Tamata, Vankaya, Sorakkai, Aloo*), detailed descriptions, and unit prices.
   - Product-level quantity selectors (`[ - ] 1 [ + ]`) and "Add to Cart" button.

3. **Dynamic Category Filtering:**
   - All Vegetables
   - Leafy Vegetables
   - Root Vegetables
   - Tomatoes & Gourds
   - Beans
   - Brinjal
   - Cabbage & Cauliflower
   - Green Vegetables
   - Seasonal Vegetables

4. **Real-Time Instant Search & Sorting:**
   - Instant search with matching on vegetable names, regional names, and categories.
   - Sorting by Price (Low to High, High to Low) and Alphabetical order (A-Z).

5. **Interactive Slide-Out Cart Drawer & LocalStorage:**
   - Itemized listing with increment/decrement steppers, item totals, and remove button.
   - Real-time subtotal, delivery charge (`₹30`), and grand total calculations.
   - Cart persistence via `localStorage` (survives page refreshes).
   - Sticky floating cart bar on mobile screens.

6. **Direct WhatsApp Order System:**
   - Automatically builds an encoded WhatsApp message:
     ```
     Hello Khammam Vegitables,
     I would like to place an order.

     Order Details:
     - Tomato - 2 kg
     - Potato - 1 kg
     - Carrot - 1 kg

     Subtotal: ₹230
     Delivery: ₹30
     Total: ₹260

     Please confirm my order.
     ```
   - Opens `https://wa.me/919000420062?text=...` directly.
   - Direct click-to-call button (`tel:9000420062`).

---

## 📁 Project Structure

```text
khammam-vegitables/
│
├── package.json              # Project scripts & dependencies
├── vite.config.js            # Vite build configuration
├── index.html                # HTML entry point for Vite React mount
├── src/
│   ├── main.jsx              # React root render
│   ├── App.jsx               # Main state container (cart, filters, drawers)
│   ├── data/
│   │   └── vegetables.js     # Product catalog & configuration constants
│   ├── components/
│   │   ├── Header.jsx        # Sticky navigation header
│   │   ├── MobileNav.jsx     # Mobile drawer navigation
│   │   ├── Hero.jsx          # Hero section with trust badges
│   │   ├── Categories.jsx    # Category filter pills
│   │   ├── ProductControls.jsx # Search input & sort dropdown
│   │   ├── ProductCard.jsx   # Individual product card & stepper
│   │   ├── ProductGrid.jsx   # Grid of product cards & empty state
│   │   ├── CartDrawer.jsx    # Slide-out cart with checkout actions
│   │   ├── MobileCartBar.jsx # Sticky mobile bottom cart bar
│   │   ├── About.jsx         # Store story & local harvest details
│   │   ├── WhyChooseUs.jsx   # 4 value cards
│   │   ├── HowItWorks.jsx    # 3-step guide
│   │   ├── Contact.jsx       # Contact form & call buttons
│   │   ├── Footer.jsx        # Footer & copyright
│   │   └── Toast.jsx         # Toast notifications
│   └── styles/
│       └── style.css         # Modern design tokens & responsive CSS
└── .github/workflows/
    └── deploy.yml            # Automated GitHub Pages CI/CD workflow
```

---

## 💻 Running the Project Locally

### 1. Development Mode (with Live Reload):
```powershell
npm run dev
```
Open `http://localhost:5173` in your browser.

### 2. Production Build:
```powershell
npm run build
```
Creates an optimized static bundle in the `dist/` directory.

### 3. Preview Production Build:
```powershell
npm run preview
```
