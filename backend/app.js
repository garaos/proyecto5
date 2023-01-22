const express = require('express');
const app = express();

// rutas
const products = require('./routes/products')

app.use('/api/v1',products)

module.exports = app