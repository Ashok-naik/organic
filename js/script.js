/**
 * TASK Organic Vegetables - Core JavaScript
 * Store: TASK | Telangana, India | Contact: 9000420062
 * Vanilla JS, Zero External Frameworks
 */

// ==========================================================================
// 1. Vegetable Product Data (Easy to update, edit or expand)
// ==========================================================================
const VEGETABLES_DATA = [
  {
    id: 1,
    name: "Tomato",
    localName: "Tamata (టమాట)",
    category: "Tomatoes & Gourds",
    price: 60,
    unit: "kg",
    description: "Farm-fresh, juicy red tomatoes hand-picked at peak ripeness. Rich in lycopene and vitamin C.",
    badge: "Naturally Grown",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    color: "#e63946"
  },
  {
    id: 2,
    name: "Potato",
    localName: "Aloo (బంగాళాదుంప)",
    category: "Root Vegetables",
    price: 40,
    unit: "kg",
    description: "Firm, freshly harvested organic potatoes. Excellent texture for curries, roasts, and fries.",
    badge: "Naturally Grown",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    color: "#d4a373"
  },
  {
    id: 3,
    name: "Onion",
    localName: "Ullipayalu (ఉల్లిపాయ)",
    category: "Root Vegetables",
    price: 45,
    unit: "kg",
    description: "Pungent, flavorful farm onions essential for aromatic Indian cooking and rich gravies.",
    badge: "Farm Fresh",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80",
    color: "#b08968"
  },
  {
    id: 4,
    name: "Carrot",
    localName: "Carrot (క్యారెట్)",
    category: "Root Vegetables",
    price: 70,
    unit: "kg",
    description: "Sweet, crunchy tender carrots loaded with beta-carotene, vitamins, and natural sweetness.",
    badge: "Naturally Grown",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&w=600&q=80",
    color: "#f77f00"
  },
  {
    id: 5,
    name: "Spinach",
    localName: "Palak (పాలకూర)",
    category: "Leafy Vegetables",
    price: 30,
    unit: "bunch",
    description: "Crisp, vibrant green spinach bunches harvested daily. Rich in dietary iron and essential minerals.",
    badge: "Fresh Daily",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
    color: "#2d6a4f"
  },
  {
    id: 6,
    name: "Brinjal",
    localName: "Vankaya (వంకాయ)",
    category: "Brinjal",
    price: 50,
    unit: "kg",
    description: "Glossy, tender small purple brinjals ideal for authentic Telangana gutti vankaya curry.",
    badge: "Naturally Grown",
    image: "https://images.unsplash.com/photo-1628773822503-930a84e9eb4a?auto=format&fit=crop&w=600&q=80",
    color: "#7209b7"
  },
  {
    id: 7,
    name: "Ladies Finger",
    localName: "Bhendi (బెండకాయ)",
    category: "Green Vegetables",
    price: 55,
    unit: "kg",
    description: "Crisp, tender green okra harvested young for optimal cooking and delicate flavor.",
    badge: "Naturally Grown",
    image: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?auto=format&fit=crop&w=600&q=80",
    color: "#52b788"
  },
  {
    id: 8,
    name: "Bottle Gourd",
    localName: "Sorakkai / Lauki (సొరకాయ)",
    category: "Tomatoes & Gourds",
    price: 40,
    unit: "kg",
    description: "Light, hydrating, cooling bottle gourd. High water content, great for weight-loss and healthy juices.",
    badge: "Farm Fresh",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80",
    color: "#95d5b2"
  },
  {
    id: 9,
    name: "Bitter Gourd",
    localName: "Kakarakaya (కాకరకాయ)",
    category: "Tomatoes & Gourds",
    price: 60,
    unit: "kg",
    description: "Fresh, crunchy bitter gourds known for remarkable therapeutic properties and blood purification.",
    badge: "Naturally Grown",
    image: "https://images.unsplash.com/photo-1596797882870-8c33deeac224?auto=format&fit=crop&w=600&q=80",
    color: "#40916c"
  },
  {
    id: 10,
    name: "Ridge Gourd",
    localName: "Beerakaya (బీరకాయ)",
    category: "Tomatoes & Gourds",
    price: 55,
    unit: "kg",
    description: "Tender, fibrous ridge gourds with subtle sweetness. Easy to digest and packed with cellulose.",
    badge: "Naturally Grown",
    image: "https://images.unsplash.com/photo-1598511726623-d2e9996892f0?auto=format&fit=crop&w=600&q=80",
    color: "#52b788"
  },
  {
    id: 11,
    name: "Cabbage",
    localName: "Cabbage (క్యాబేజీ)",
    category: "Cabbage & Cauliflower",
    price: 40,
    unit: "kg",
    description: "Tightly layered, crisp organic cabbage heads. Great for fresh salads, stir-fries, and curries.",
    badge: "Farm Fresh",
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=600&q=80",
    color: "#74c69d"
  },
  {
    id: 12,
    name: "Cauliflower",
    localName: "Cauliflower (కాలీఫ్లవర్)",
    category: "Cabbage & Cauliflower",
    price: 50,
    unit: "piece",
    description: "Fresh, compact creamy-white cauliflower heads. Full of vitamins, dietary fiber, and antioxidants.",
    badge: "Quality Checked",
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=600&q=80",
    color: "#e9d8a6"
  },
  {
    id: 13,
    name: "Green Chilli",
    localName: "Pachi Mirapa (పచ్చిమిర్చి)",
    category: "Green Vegetables",
    price: 30,
    unit: "250g",
    description: "Spicy, fresh green chillies hand-picked to deliver authentic heat and aroma to dishes.",
    badge: "Fresh Daily",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80",
    color: "#38b000"
  },
  {
    id: 14,
    name: "Capsicum",
    localName: "Shimla Mirchi (క్యాప్సికం)",
    category: "Green Vegetables",
    price: 75,
    unit: "kg",
    description: "Crisp, thick-walled green bell peppers with sweet earthy notes and high vitamin C.",
    badge: "Naturally Grown",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80",
    color: "#2d6a4f"
  },
  {
    id: 15,
    name: "Beetroot",
    localName: "Beetroot (బీట్‌రూట్)",
    category: "Root Vegetables",
    price: 50,
    unit: "kg",
    description: "Deep crimson, sweet earthy beetroots known to boost endurance, hemoglobin, and blood flow.",
    badge: "Naturally Grown",
    image: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?auto=format&fit=crop&w=600&q=80",
    color: "#9d0208"
  },
  {
    id: 16,
    name: "Radish",
    localName: "Mullangi (ముల్లంగి)",
    category: "Root Vegetables",
    price: 40,
    unit: "kg",
    description: "Crisp, crunchy white radishes with refreshing peppery zest and superior digestive benefits.",
    badge: "Farm Fresh",
    image: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?auto=format&fit=crop&w=600&q=80",
    color: "#e2eafc"
  },
  {
    id: 17,
    name: "Beans",
    localName: "French Beans (బీన్స్)",
    category: "Beans",
    price: 65,
    unit: "kg",
    description: "Slender, snappy green beans freshly picked. Perfect for quick vegetable stir-fries and poriyals.",
    badge: "Naturally Grown",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=600&q=80",
    color: "#40916c"
  },
  {
    id: 18,
    name: "Green Peas",
    localName: "Batani (బఠానీ)",
    category: "Seasonal Vegetables",
    price: 90,
    unit: "kg",
    description: "Sweet, tender green peas freshly podded from winter harvest. Naturally sweet and rich in protein.",
    badge: "Seasonal Special",
    image: "https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&w=600&q=80",
    color: "#52b788"
  },
  {
    id: 19,
    name: "Cucumber",
    localName: "Keera Dosakaya (కీరదోస)",
    category: "Green Vegetables",
    price: 40,
    unit: "kg",
    description: "Cooling, juicy cucumbers with thin skins and minimal seeds. Perfect for summer salads and raita.",
    badge: "Fresh Daily",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=600&q=80",
    color: "#74c69d"
  },
  {
    id: 20,
    name: "Coriander",
    localName: "Kotmir (కొత్తిమీర)",
    category: "Leafy Vegetables",
    price: 20,
    unit: "bunch",
    description: "Intensely fragrant, fresh green coriander leaves. Brings life and appetizing aroma to every dish.",
    badge: "Fresh Daily",
    image: "https://images.unsplash.com/photo-1588879462719-74d12c0199d7?auto=format&fit=crop&w=600&q=80",
    color: "#2d6a4f"
  },
  {
    id: 21,
    name: "Mint Leaves",
    localName: "Pudina (పుదీనా)",
    category: "Leafy Vegetables",
    price: 20,
    unit: "bunch",
    description: "Refreshing, cooling organic mint sprigs. Unbeatable aroma for chutneys, herbal teas, and biryani.",
    badge: "Fresh Daily",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80",
    color: "#40916c"
  },
  {
    id: 22,
    name: "Cluster Beans",
    localName: "Goruchikkudu (గోరుచిక్కుడు)",
    category: "Beans",
    price: 50,
    unit: "kg",
    description: "Tender, high-fiber cluster beans loaded with essential minerals and distinctive rustic flavor.",
    badge: "Naturally Grown",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=600&q=80",
    color: "#52b788"
  }
];

// Delivery fee configuration
const DELIVERY_CHARGE = 30;
const STORE_PHONE = "9000420062";
const STORE_WHATSAPP_PHONE = "919000420062"; // +91 for India

// ==========================================================================
// 2. Application State
// ==========================================================================
let state = {
  vegetables: [...VEGETABLES_DATA],
  cart: [],
  activeCategory: "All",
  searchQuery: "",
  sortBy: "default",
  cardQuantities: {} // Temporary quantity selections on product cards: { [id]: number }
};

// ==========================================================================
// 3. Fallback SVG Generator (Guarantees no broken cards offline)
// ==========================================================================
function getVegetableFallbackSvg(name, color = "#2d6a4f") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="#f0f7f3"/>
    <circle cx="200" cy="140" r="75" fill="${color}" opacity="0.85"/>
    <path d="M200 65 C200 45 220 40 230 45 C225 60 215 65 200 65 Z" fill="#2d6a4f"/>
    <path d="M190 70 C175 55 180 35 195 40 C195 55 190 65 190 70 Z" fill="#40916c"/>
    <text x="200" y="245" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="700" fill="#1b4332" text-anchor="middle">${name}</text>
    <text x="200" y="270" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#52b788" text-anchor="middle">TASK ORGANIC PRODUCE</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// ==========================================================================
// 4. LocalStorage Sync
// ==========================================================================
function saveCartToStorage() {
  try {
    localStorage.setItem("task_organic_cart", JSON.stringify(state.cart));
  } catch (e) {
    console.error("Unable to save cart to localStorage", e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("task_organic_cart");
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error("Unable to load cart from localStorage", e);
    state.cart = [];
  }
}

// ==========================================================================
// 5. Product Rendering & Filtering Logic
// ==========================================================================
function getFilteredAndSortedProducts() {
  let list = [...state.vegetables];

  // 1. Filter by category
  if (state.activeCategory !== "All") {
    list = list.filter(item => item.category === state.activeCategory);
  }

  // 2. Filter by search query
  if (state.searchQuery.trim() !== "") {
    const query = state.searchQuery.trim().toLowerCase();
    list = list.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.localName.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  }

  // 3. Sort
  switch (state.sortBy) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      list.sort((a, b) => a.id - b.id);
      break;
  }

  return list;
}

function renderProducts() {
  const grid = document.getElementById("products-grid");
  const countDisplay = document.getElementById("results-count");
  if (!grid) return;

  const products = getFilteredAndSortedProducts();

  if (countDisplay) {
    countDisplay.textContent = `Showing ${products.length} fresh vegetable${products.length === 1 ? '' : 's'}`;
  }

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">
          <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </div>
        <h3 class="no-results-title">No Vegetables Found</h3>
        <p class="no-results-text">We couldn't find any vegetable matching your current selection.</p>
        <button class="btn btn-outline" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map(item => {
    const cardQty = state.cardQuantities[item.id] || 1;
    const fallbackSvg = getVegetableFallbackSvg(item.name, item.color);

    return `
      <article class="product-card" data-id="${item.id}">
        <div class="product-image-container">
          <img 
            src="${item.image}" 
            alt="${item.name} - Fresh Organic Vegetable" 
            class="product-image"
            loading="lazy"
            onerror="this.onerror=null; this.src='${fallbackSvg}';"
          >
          <span class="badge-organic">
            <svg viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>
            ${item.badge}
          </span>
          <span class="category-tag">${item.category}</span>
        </div>

        <div class="product-body">
          <div class="product-header">
            <h3 class="product-name">${item.name}</h3>
            <span class="product-local-name">${item.localName}</span>
          </div>

          <p class="product-description">${item.description}</p>

          <div class="product-price-row">
            <span class="price-currency">₹</span>
            <span class="price-value">${item.price}</span>
            <span class="price-unit">/ ${item.unit}</span>
          </div>

          <div class="product-card-controls">
            <div class="quantity-stepper" role="group" aria-label="Quantity for ${item.name}">
              <button 
                type="button" 
                class="step-btn btn-step-minus" 
                aria-label="Decrease quantity" 
                onclick="changeCardQty(${item.id}, -1)" 
                ${cardQty <= 1 ? 'disabled' : ''}
              >-</button>
              <span class="qty-display">${cardQty}</span>
              <button 
                type="button" 
                class="step-btn btn-step-plus" 
                aria-label="Increase quantity" 
                onclick="changeCardQty(${item.id}, 1)"
              >+</button>
            </div>

            <button 
              type="button" 
              class="btn-add-cart" 
              onclick="addToCartFromCard(${item.id})"
            >
              <svg viewBox="0 0 24 24"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Adjust quantity on a product card before adding
function changeCardQty(productId, delta) {
  const current = state.cardQuantities[productId] || 1;
  const next = Math.max(1, current + delta);
  state.cardQuantities[productId] = next;
  renderProducts();
}

// ==========================================================================
// 6. Shopping Cart Operations
// ==========================================================================
function addToCart(productId, quantity = 1) {
  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ id: productId, quantity });
  }

  saveCartToStorage();
  updateCartUI();

  const vegetable = state.vegetables.find(v => v.id === productId);
  if (vegetable) {
    showToast(`Added ${quantity} ${vegetable.unit} ${vegetable.name} to basket!`, "success");
  }
}

function addToCartFromCard(productId) {
  const qty = state.cardQuantities[productId] || 1;
  addToCart(productId, qty);
  state.cardQuantities[productId] = 1; // Reset card quantity back to 1
  renderProducts();
}

function updateCartItemQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(productId) {
  const item = state.vegetables.find(v => v.id === productId);
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCartToStorage();
  updateCartUI();

  if (item) {
    showToast(`Removed ${item.name} from basket`, "info");
  }
}

function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  saveCartToStorage();
  updateCartUI();
  showToast("Your basket has been cleared", "info");
}

function getCartCalculations() {
  let subtotal = 0;
  let totalItemsCount = 0;

  state.cart.forEach(cartItem => {
    const veg = state.vegetables.find(v => v.id === cartItem.id);
    if (veg) {
      subtotal += veg.price * cartItem.quantity;
      totalItemsCount += cartItem.quantity;
    }
  });

  const delivery = subtotal > 0 ? DELIVERY_CHARGE : 0;
  const grandTotal = subtotal + delivery;

  return { subtotal, delivery, grandTotal, totalItemsCount };
}

function updateCartUI() {
  const { subtotal, delivery, grandTotal, totalItemsCount } = getCartCalculations();

  // 1. Update Cart Badges
  const badges = document.querySelectorAll(".cart-badge");
  badges.forEach(badge => {
    badge.textContent = totalItemsCount;
    badge.style.display = totalItemsCount > 0 ? "flex" : "none";
  });

  const countPill = document.getElementById("cart-items-count-pill");
  if (countPill) {
    countPill.textContent = `${totalItemsCount} item${totalItemsCount === 1 ? '' : 's'}`;
  }

  // 2. Update Mobile Floating Cart Bar
  const mobileBar = document.getElementById("mobile-cart-bar");
  if (mobileBar) {
    if (totalItemsCount > 0) {
      mobileBar.classList.add("visible");
      document.getElementById("mcb-count").textContent = `${totalItemsCount} item${totalItemsCount === 1 ? '' : 's'}`;
      document.getElementById("mcb-total").textContent = `₹${grandTotal}`;
    } else {
      mobileBar.classList.remove("visible");
    }
  }

  // 3. Render Cart Drawer Items
  const itemsContainer = document.getElementById("cart-items-wrapper");
  const emptyView = document.getElementById("cart-empty-view");
  const footerView = document.getElementById("cart-footer");

  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.style.display = "none";
    if (emptyView) emptyView.style.display = "flex";
    if (footerView) footerView.style.display = "none";
    return;
  }

  itemsContainer.style.display = "block";
  if (emptyView) emptyView.style.display = "none";
  if (footerView) footerView.style.display = "block";

  // Render items
  const itemsHtml = state.cart.map(cartItem => {
    const veg = state.vegetables.find(v => v.id === cartItem.id);
    if (!veg) return "";

    const itemTotal = veg.price * cartItem.quantity;
    const fallbackSvg = getVegetableFallbackSvg(veg.name, veg.color);

    return `
      <div class="cart-item">
        <img 
          src="${veg.image}" 
          alt="${veg.name}" 
          class="cart-item-thumb"
          onerror="this.onerror=null; this.src='${fallbackSvg}';"
        >
        <div class="cart-item-details">
          <h4 class="cart-item-name">${veg.name}</h4>
          <div class="cart-item-rate">₹${veg.price} / ${veg.unit}</div>
          <div class="cart-item-bottom">
            <div class="cart-item-stepper">
              <button 
                type="button" 
                class="cart-step-btn" 
                aria-label="Decrease quantity" 
                onclick="updateCartItemQty(${veg.id}, -1)"
              >-</button>
              <span class="cart-item-qty">${cartItem.quantity}</span>
              <button 
                type="button" 
                class="cart-step-btn" 
                aria-label="Increase quantity" 
                onclick="updateCartItemQty(${veg.id}, 1)"
              >+</button>
            </div>
            <div class="cart-item-total">₹${itemTotal}</div>
          </div>
        </div>
        <button 
          type="button" 
          class="cart-item-remove" 
          aria-label="Remove ${veg.name} from basket"
          onclick="removeFromCart(${veg.id})"
        >
          <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
    `;
  }).join("");

  itemsContainer.innerHTML = itemsHtml;

  // 4. Update Summary Values
  const subtotalEl = document.getElementById("cart-subtotal-val");
  const deliveryEl = document.getElementById("cart-delivery-val");
  const grandTotalEl = document.getElementById("cart-grand-total-val");

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (deliveryEl) deliveryEl.textContent = `₹${delivery}`;
  if (grandTotalEl) grandTotalEl.textContent = `₹${grandTotal}`;
}

// ==========================================================================
// 7. Cart Drawer Open / Close Controls
// ==========================================================================
function openCart() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (drawer && backdrop) {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    document.body.classList.add("cart-open");
  }
}

function closeCart() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.classList.remove("cart-open");
  }
}

// ==========================================================================
// 8. WhatsApp Order System
// ==========================================================================
function placeWhatsAppOrder() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty. Add some fresh vegetables first!", "info");
    return;
  }

  const { subtotal, delivery, grandTotal } = getCartCalculations();

  // Construct itemized lines
  const itemLines = state.cart.map(cartItem => {
    const veg = state.vegetables.find(v => v.id === cartItem.id);
    if (!veg) return "";
    return `- ${veg.name} - ${cartItem.quantity} ${veg.unit}`;
  }).filter(line => line !== "").join("\n");

  // Construct exact message format requested
  const message = 
`Hello TASK,
I would like to place an order.

Order Details:
${itemLines}

Subtotal: ₹${subtotal}
Delivery: ₹${delivery}
Total: ₹${grandTotal}

Please confirm my order.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${STORE_WHATSAPP_PHONE}?text=${encodedMessage}`;

  // Open WhatsApp in a new window/tab
  window.open(whatsappUrl, "_blank");
  showToast("Opening WhatsApp with your order summary...", "success");
}

function placeGeneralWhatsAppInquiry() {
  const message = `Hello TASK, I would like to inquire about today's fresh organic vegetables.`;
  const whatsappUrl = `https://wa.me/${STORE_WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}

// ==========================================================================
// 9. Toast Notification System
// ==========================================================================
function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  const iconSvg = type === "success" 
    ? `<svg style="width:18px;height:18px;fill:#52b788;flex-shrink:0;" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`
    : `<svg style="width:18px;height:18px;fill:#f4a261;flex-shrink:0;" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;

  toast.innerHTML = `${iconSvg}<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-out");
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

// ==========================================================================
// 10. Filter & Search Handlers
// ==========================================================================
function setCategory(categoryName) {
  state.activeCategory = categoryName;

  // Update button active classes
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach(btn => {
    if (btn.dataset.category === categoryName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderProducts();
}

function resetFilters() {
  state.activeCategory = "All";
  state.searchQuery = "";
  state.sortBy = "default";

  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  const sortSelect = document.getElementById("sort-select");

  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.classList.remove("visible");
  if (sortSelect) sortSelect.value = "default";

  setCategory("All");
}

// ==========================================================================
// 11. Event Listeners & Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Load persisted cart
  loadCartFromStorage();

  // 2. Render initial product grid & cart
  renderProducts();
  updateCartUI();

  // 3. Category Buttons
  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      setCategory(btn.dataset.category);
    });
  });

  // 4. Search Box Listener
  const searchInput = document.getElementById("search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      if (searchClearBtn) {
        if (state.searchQuery.trim().length > 0) {
          searchClearBtn.classList.add("visible");
        } else {
          searchClearBtn.classList.remove("visible");
        }
      }
      renderProducts();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        state.searchQuery = "";
        searchClearBtn.classList.remove("visible");
        searchInput.focus();
        renderProducts();
      }
    });
  }

  // 5. Sort Select Listener
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // 6. Cart Drawer Triggers
  const cartTrigger = document.getElementById("cart-trigger-btn");
  const cartCloseBtn = document.getElementById("cart-close-btn");
  const cartBackdrop = document.getElementById("cart-backdrop");
  const emptyCartShopBtn = document.getElementById("empty-cart-shop-btn");

  if (cartTrigger) cartTrigger.addEventListener("click", openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCart);
  if (emptyCartShopBtn) {
    emptyCartShopBtn.addEventListener("click", () => {
      closeCart();
      const vegSection = document.getElementById("vegetables");
      if (vegSection) vegSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // 7. Mobile Drawer Navigation
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = hamburgerBtn.classList.toggle("active");
      mobileDrawer.classList.toggle("open", isOpen);
      document.body.classList.toggle("menu-open", isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        mobileDrawer.classList.remove("open");
        document.body.classList.remove("menu-open");
      });
    });
  }

  // 8. Sticky Header Scroll Shadow
  const siteHeader = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      siteHeader?.classList.add("scrolled");
    } else {
      siteHeader?.classList.remove("scrolled");
    }
  });

  // 9. Contact Form Validation & Submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name")?.value.trim();
      const mobile = document.getElementById("contact-phone")?.value.trim();
      const message = document.getElementById("contact-message")?.value.trim();

      if (!name) {
        showToast("Please enter your name", "info");
        document.getElementById("contact-name")?.focus();
        return;
      }

      // 10 digit Indian phone validation
      const phoneRegex = /^[6-9]\d{9}$/;
      const cleanedPhone = mobile.replace(/\D/g, "");
      if (!cleanedPhone || cleanedPhone.length < 10) {
        showToast("Please enter a valid 10-digit mobile number", "info");
        document.getElementById("contact-phone")?.focus();
        return;
      }

      if (!message) {
        showToast("Please enter your message or query", "info");
        document.getElementById("contact-message")?.focus();
        return;
      }

      // Success
      showToast(`Thank you, ${name}! We received your inquiry and will call you at ${cleanedPhone} shortly.`, "success");
      contactForm.reset();
    });
  }

  // 10. WhatsApp Checkout Button in Cart
  const btnWhatsAppCheckout = document.getElementById("btn-cart-whatsapp");
  if (btnWhatsAppCheckout) {
    btnWhatsAppCheckout.addEventListener("click", placeWhatsAppOrder);
  }

  // 11. Clear Cart Link
  const clearCartBtn = document.getElementById("clear-cart-btn");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Are you sure you want to clear your vegetable basket?")) {
        clearCart();
      }
    });
  }
});
