// backend/server.js
const express = require('express');
const cors = require('cors');
const products = require('./products');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.static('public')); // Serve static files from the public directory

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
