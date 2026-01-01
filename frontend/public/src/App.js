import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Cart from './components/Cart';

function App(){
  const [page, setPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const found = prev.find(i=>i.id===item.id);
      if(found){
        return prev.map(i=> i.id===item.id ? {...i, qty: i.qty+1} : i);
      } else {
        return [...prev, {...item, qty:1}];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i=>i.id!==id));
  };

  return (
    <div>
      <Header navigate={setPage} />
      <div className="container">
        {page==='home' && <Home />}
        {page==='about' && <About />}
        {page==='features' && <Features />}
        {page==='contact' && <Contact />}
        {page==='menu' && <Menu addToCart={addToCart} />}
      </div>
      <Cart items={cartItems} remove={removeFromCart} />
      <Footer />
    </div>
  );
}

export default App;
