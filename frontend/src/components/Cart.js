import React from 'react';

export default function Cart({ items, remove, goCheckout }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="cart">
      <h4>Cart</h4>

      {items.length === 0 && <div>Cart is empty</div>}

      {items.map(i => (
        <div key={i.id} style={{ marginBottom: 8 }}>
          <div style={{ fontWeight: 600 }}>
            {i.name} x{i.qty}
          </div>
          <div>${(i.price * i.qty).toFixed(2)}</div>

          <button onClick={() => remove(i.id)}>Remove</button>
        </div>
      ))}

      <hr />
      <div style={{ fontWeight: 700 }}>
        Total: ${total.toFixed(2)}
      </div>

      {/* ✅ SAFE CHECKOUT BUTTON */}
      {goCheckout && items.length > 0 && (
        <button
          style={{ marginTop: 10, width: '100%' }}
          onClick={goCheckout}
        >
          Checkout
        </button>
      )}
    </div>
  );
}
