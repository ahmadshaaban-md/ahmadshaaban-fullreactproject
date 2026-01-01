const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// =======================
// MySQL Connection
// =======================
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port:'3306',
  database: 'ecommerce_db'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('MySQL Connected');
});

// =======================
// CHECKOUT API (MAIN)
// =======================
app.post('/checkout', (req, res) => {
  const { full_name, phone, address, cart, total_price } = req.body;

  if (!full_name || !phone || !address || !cart || cart.length === 0) {
    return res.status(400).json({ message: 'Missing checkout data' });
  }

  // 1️⃣ Insert customer
  const customerSql =
    'INSERT INTO customers (full_name, phone, address) VALUES (?, ?, ?)';

  db.query(customerSql, [full_name, phone, address], (err, customerResult) => {
    if (err) return res.status(500).json(err);

    const customer_id = customerResult.insertId;

    // 2️⃣ Create order
    const orderSql =
      'INSERT INTO orders (customer_id, total_price) VALUES (?, ?)';

    db.query(orderSql, [customer_id, total_price], (err, orderResult) => {
      if (err) return res.status(500).json(err);

      const order_id = orderResult.insertId;

      // 3️⃣ Insert order items
      const itemsSql =
        'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ?';

      const values = cart.map(item => [
        order_id,
        item.product_id,
        item.quantity,
        item.price
      ]);

      db.query(itemsSql, [values], err => {
        if (err) return res.status(500).json(err);

        res.json({
          message: 'Order placed successfully',
          order_id
        });
      });
    });
  });
});

// =======================
// GET ALL ORDERS (Admin)
// =======================
app.get('/orders', (req, res) => {
  const sql = `
    SELECT 
      o.order_id,
      o.order_date,
      o.total_price,
      c.full_name,
      c.phone,
      c.address
    FROM orders o
    JOIN customers c ON o.customer_id = c.customer_id
    ORDER BY o.order_date DESC
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// =======================
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
