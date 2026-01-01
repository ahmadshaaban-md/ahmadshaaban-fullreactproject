import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from "./components/Checkout";

function App() {
  const [page, setPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const found = prev.find(i => i.id === item.id);
      if (found) {
        return prev.map(i =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div>
      <Header navigate={setPage} />

      <div className="container">
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
        {page === 'menu' && <Menu addToCart={addToCart} />}

        {/* ✅ CHECKOUT PAGE */}
        {page === 'checkout' && (
          <Checkout
            cart={cartItems}
            goHome={() => setPage('home')}
            clearCart={() => setCartItems([])}
          />
        )}
      </div>

      {/* ✅ CART ALWAYS VISIBLE */}
    <Cart
  items={cartItems}
  remove={removeFromCart}
  goCheckout={() => setPage('checkout')}
/>


      <Footer />
    </div>
  );
}

export default App;
