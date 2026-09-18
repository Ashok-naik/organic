import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductControls from './components/ProductControls';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import MobileCartBar from './components/MobileCartBar';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

import { 
  STORE_NAME, 
  STORE_WHATSAPP_PHONE, 
  DELIVERY_CHARGE, 
  VEGETABLES_DATA 
} from './data/vegetables';

export default function App() {
  // 1. Cart State (with LocalStorage)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('khammam_organic_cart') || localStorage.getItem('task_organic_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Transform { id, quantity } into { product, quantity }
        return parsed.map((item) => {
          const product = VEGETABLES_DATA.find((v) => v.id === item.id);
          return product ? { product, quantity: item.quantity } : null;
        }).filter(Boolean);
      }
    } catch (e) {
      console.error('Error loading cart from storage', e);
    }
    return [];
  });

  // 2. Filter, Search & Sort States
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // 3. UI Drawer & Modal States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Save cart to localStorage
  useEffect(() => {
    try {
      const simplified = cart.map((item) => ({
        id: item.product.id,
        quantity: item.quantity,
      }));
      localStorage.setItem('khammam_organic_cart', JSON.stringify(simplified));
    } catch (e) {
      console.error('Error saving cart to storage', e);
    }
  }, [cart]);

  // Lock body scroll when cart or mobile menu is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('cart-open');
    } else {
      document.body.classList.remove('cart-open');
    }

    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isCartOpen, isMobileMenuOpen]);

  // Toast Trigger
  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  // Cart Calculations
  const { subtotal, delivery, grandTotal, totalItemsCount } = useMemo(() => {
    const sub = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    const del = sub > 0 ? DELIVERY_CHARGE : 0;
    const total = sub + del;
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    return { subtotal: sub, delivery: del, grandTotal: total, totalItemsCount: count };
  }, [cart]);

  // Filter & Sort Products
  const filteredProducts = useMemo(() => {
    let list = [...VEGETABLES_DATA];

    if (activeCategory !== 'All') {
      list = list.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter((item) =>
        item.name.toLowerCase().includes(q) ||
        item.localName.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        list.sort((a, b) => a.id - b.id);
        break;
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  // Cart Handlers
  const handleAddToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${quantity} ${product.unit} ${product.name} to basket!`, 'success');
  };

  const handleUpdateCartQty = (productId, delta) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleRemoveFromCart = (productId) => {
    const item = cart.find((i) => i.product.id === productId);
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
    if (item) {
      showToast(`Removed ${item.product.name} from basket`, 'info');
    }
  };

  const handleClearCart = () => {
    if (cart.length === 0) return;
    if (window.confirm('Are you sure you want to clear your vegetable basket?')) {
      setCart([]);
      showToast('Your basket has been cleared', 'info');
    }
  };

  // WhatsApp Orders
  const handlePlaceWhatsAppOrder = () => {
    if (cart.length === 0) {
      showToast('Your cart is empty. Add some fresh vegetables first!', 'info');
      return;
    }

    const itemLines = cart
      .map(({ product, quantity }) => `- ${product.name} - ${quantity} ${product.unit}`)
      .join('\n');

    const message = `Hello ${STORE_NAME},
I would like to place an order.

Order Details:
${itemLines}

Subtotal: ₹${subtotal}
Delivery: ₹${delivery}
Total: ₹${grandTotal}

Please confirm my order.`;

    const url = `https://wa.me/${STORE_WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    showToast('Opening WhatsApp with your order summary...', 'success');
  };

  const handleWhatsAppGeneralInquiry = () => {
    const message = `Hello ${STORE_NAME}, I would like to inquire about today's fresh organic vegetables.`;
    const url = `https://wa.me/${STORE_WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleResetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setSortBy('default');
  };

  return (
    <>
      <Header
        totalItemsCount={totalItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onWhatsAppInquiry={handleWhatsAppGeneralInquiry}
      />

      <main>
        <Hero onWhatsAppInquiry={handleWhatsAppGeneralInquiry} />

        <Categories
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
        />

        <section className="products-section" id="vegetables">
          <div className="container">
            <ProductControls
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onClearSearch={() => setSearchQuery('')}
              sortBy={sortBy}
              onSortChange={setSortBy}
              resultsCount={filteredProducts.length}
            />

            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
              onResetFilters={handleResetFilters}
            />
          </div>
        </section>

        <About />
        <WhyChooseUs />
        <HowItWorks />
        <Contact 
          onWhatsAppInquiry={handleWhatsAppGeneralInquiry}
          onShowToast={showToast}
        />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        subtotal={subtotal}
        delivery={delivery}
        grandTotal={grandTotal}
        totalItemsCount={totalItemsCount}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onPlaceOrder={handlePlaceWhatsAppOrder}
      />

      <MobileCartBar
        totalItemsCount={totalItemsCount}
        grandTotal={grandTotal}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <Toast toasts={toasts} />
    </>
  );
}
