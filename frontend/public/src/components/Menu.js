import React from 'react';

const MENU = [
  { id: 1, name: 'Margherita Pizza', price: 8.5, img: 'https://via.placeholder.com/400x300?text=Pizza' },
  { id: 2, name: 'Cheeseburger', price: 7.0, img: 'https://via.placeholder.com/400x300?text=Burger' },
  { id: 3, name: 'Caesar Salad', price: 6.5, img: 'https://via.placeholder.com/400x300?text=Salad' },
  { id: 4, name: 'Spaghetti Bolognese', price: 9.0, img: 'https://via.placeholder.com/400x300?text=Spaghetti' }
];

export default function Menu({ addToCart }){
  return (
    <div>
      <h2>Menu</h2>
      <div className="grid">
        {MENU.map(item => (
          <div className="card menu-item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={()=>addToCart(item)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
