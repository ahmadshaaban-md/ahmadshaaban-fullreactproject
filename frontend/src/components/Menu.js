import React from 'react';
import MargheritaPizza from "../assets/Margherita Pizza.jpg";
import Cheeseburger from "../assets/Cheeseburger.jpg";
import CaesarSalad from "../assets/Caesar Salad.jpg";
import SpaghettiBolognese from "../assets/Spaghetti Bolognese.jpg";


const MENU = [
  { id: 1, name: 'Margherita Pizza', price: 8.5, img: MargheritaPizza },
  { id: 2, name: 'Cheese Burger', price: 7.0, img: Cheeseburger },
  { id: 3, name: 'Caesar Salad', price: 6.5, img: CaesarSalad },
  { id: 4, name: 'Spaghetti Bolognese', price: 9.0, img: SpaghettiBolognese }
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
