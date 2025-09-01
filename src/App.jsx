// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import stylesApp from "./styles/App.module.css";
import ContactModal from "./components/ContactModal";
import FloatingContact from "./components/FloatingContact";

export const CartContext = React.createContext();

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart_v1", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + qty } : p);
      }
      return [...prev, { ...product, qty }];
    });
  };

  const updateQty = (id, qty) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, qty: Math.max(1, qty) } : p));
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(p => p.id !== id));

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart, clearCart }}>
      <div className={stylesApp.app}>
        <Navbar onOpenContact={() => setContactOpen(true)} />
        <main className={stylesApp.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact onOpen={() => setContactOpen(true)} />
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </CartContext.Provider>
  );
}

export default App;
