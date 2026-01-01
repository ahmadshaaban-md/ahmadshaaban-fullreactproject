import React, { useState } from "react";

export default function Checkout({ cart }) {
  const [full_name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total_price = cart.reduce(
    (s, i) => s + i.price * i.qty,
    0
  );

  const placeOrder = async () => {
    const payload = {
      full_name,
      phone,
      address,
      total_price,
      cart: cart.map(i => ({
        product_id: i.id,
        quantity: i.qty,
        price: i.price
      }))
    };

    await fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    alert("Order placed successfully ✅");
  };

  return (
    <div style={{ width: 400, margin: "50px auto" }}>
      <h2>Checkout</h2>

      <input
        placeholder="Full Name"
        value={full_name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <textarea
        placeholder="Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />

      <h4>Total: ${total_price.toFixed(2)}</h4>

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
