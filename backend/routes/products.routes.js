// import { Router } from 'express'
const express = require('express');
const productsRouter = express.Router();

const { getProducts, newProduct } = require ('../controllers/products.controller')


const baseURI = '/products'

productsRouter.get(baseURI, getProducts)
productsRouter.post(`${baseURI}/new`, newProduct)

//router.route('/products').get(getProducts);
// router.route('/products/new').post(newProduct);

module.exports = productsRouter