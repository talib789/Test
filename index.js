const express = require('express');
const app = express();

// In-memory product data
const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 5.99 },
];

// API endpoint to fetch product details by ID
app.get('/api/product/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
});

// Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});