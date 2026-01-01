import React from 'react';

export default function Header({navigate}){
  return (
    <div className="header">
      <div style={{fontWeight:700}}>🍽️ Restaurant</div>
      <div>
        <a href="#" onClick={(e)=>{e.preventDefault(); navigate('home');}}>Home</a>
        <a href="#" onClick={(e)=>{e.preventDefault(); navigate('menu');}}>Menu</a>

        <a href="#" onClick={(e)=>{e.preventDefault(); navigate('about');}}>About</a>
        <a href="#" onClick={(e)=>{e.preventDefault(); navigate('contact');}}>Contact</a>
      </div>
    </div>
  );
}
