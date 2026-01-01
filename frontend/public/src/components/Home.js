import React from 'react';
export default function Home(){
  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      <p>Delicious food delivered to your door. Browse the menu and add items to your cart.</p>
      <div className="grid">
        <div className="card">Fast delivery</div>
        <div className="card">Fresh Ingredients</div>
        <div className="card">Easy Payments</div>
      </div>
    </div>
  );
}
