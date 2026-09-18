# TASK - Organic Vegetable Store Website

A modern, attractive, and responsive organic vegetable e-commerce web application built exclusively with **HTML5, CSS3, and Vanilla JavaScript** (zero external frameworks or libraries).

---

## 🌿 Business Details
- **Firm Name:** TASK
- **Business Type:** Organic Vegetable Store
- **Contact Number:** `9000420062`
- **Location:** Telangana, India
- **Tagline:** Fresh • Organic • Healthy

---

## 🚀 Key Features

1. **Modern Organic UI/UX:**
   - Fresh farm-inspired color palette (emerald, forest green, warm mint, and clean white).
   - Glassmorphism sticky navigation header with dynamic shadow on scroll.
   - Micro-interactions, rounded cards, and smooth hover elevation.
   - Interactive toast notifications for user actions.

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

4. **Real-Time Instant Search:**
   - Instant search with matching on vegetable names, regional names, and categories.
   - One-click clear search button.

5. **Sorting Options:**
   - Default
   - Price: Low to High
   - Price: High to Low
   - Name: A-Z

6. **Interactive Slide-Out Cart Drawer & LocalStorage:**
   - Seamless slide-out drawer with backdrop blur.
   - Itemized listing with increment/decrement steppers, item totals, and remove button.
   - Real-time subtotal, delivery charge (`₹30`), and grand total calculations.
   - Empty state illustration and prompt: *"Your cart is empty. Add some fresh vegetables!"*.
   - Cart persistence via `localStorage` (survives page refreshes).
   - Sticky floating cart bar on mobile screens.

7. **Direct WhatsApp Order System:**
   - Automatically builds an encoded WhatsApp message matching the required format:
     ```
     Hello TASK,
     I would like to place an order.

     Order Details:
     - Tomato - 2 kg
     - Potato - 1 kg
     - Carrot - 1 kg

     Subtotal: ₹240
     Delivery: ₹30
     Total: ₹270

     Please confirm my order.
     ```
   - Opens `https://wa.me/919000420062?text=...` directly.
   - Direct click-to-call button (`tel:9000420062`).

8. **Informational & Brand Sections:**
   - **Hero Section:** With headline *"Fresh Organic Vegetables, Straight From Nature"* and 4 trust badges (*100% Fresh*, *Naturally Grown*, *Farm Fresh*, *Quality Checked*).
   - **About TASK:** Honest narrative highlighting freshness and quality for families without unsupported certification claims.
   - **Why Choose Us:** 4 feature cards (*Fresh Every Day*, *Natural Quality*, *Fair Pricing*, *Easy Ordering*).
   - **How It Works:** 3 numbered step cards (*Choose*, *Add to Cart*, *Order via WhatsApp*).
   - **Contact Section:** Location, phone, direct call/WhatsApp triggers, and an interactive contact form with validation.
   - **Footer:** Quick links, business details, and copyright `© 2026 TASK`.

---

## 📁 File Structure

```text
TASK-organic-vegetables/
│
├── index.html               # Main semantic HTML5 markup
├── css/
│   └── style.css            # Complete responsive CSS3 styling & design tokens
├── js/
│   └── script.js            # Modular Vanilla JavaScript application logic
├── images/
│   └── vegetables/          # Vegetable images and assets
└── README.md                # Project documentation
```

---

## 🛠️ How to Customize Products & Prices

All product definitions are stored in the clean, easily readable `VEGETABLES_DATA` array at the top of [`js/script.js`](file:///c:/Users/Ashok%20Kumar/Desktop/organic%20veg/js/script.js).

### To update a vegetable's price:
```javascript
{
  id: 1,
  name: "Tomato",
  localName: "Tamata (టమాట)",
  category: "Tomatoes & Gourds",
  price: 65,          // <-- Update price here
  unit: "kg",         // <-- Update unit here
  description: "...",
  badge: "Naturally Grown",
  image: "...",
  color: "#e63946"
}
```

### To change the store phone number or delivery fee:
In [`js/script.js`](file:///c:/Users/Ashok%20Kumar/Desktop/organic%20veg/js/script.js):
```javascript
const DELIVERY_CHARGE = 30;         // Delivery fee in ₹
const STORE_PHONE = "9000420062";    // Contact phone
const STORE_WHATSAPP_PHONE = "919000420062"; // WhatsApp with country code
```

---

## 💻 How to Run the Website

No web server or build step required! Simply double-click **`index.html`** in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
