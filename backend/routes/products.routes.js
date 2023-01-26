// import { Router } from 'express'
const express = require('express');
const productsRouter = express.Router();

const { getProducts, newProduct, getProduct,updateProduct, deleteProduct } = require ('../controllers/products.controller')


const baseURI = '/products'

productsRouter.get(baseURI, getProducts)
productsRouter.post(`/admin${baseURI}/new`, newProduct)
productsRouter.get(`${baseURI}/:id`, getProduct)
productsRouter.put(`/admin${baseURI}/:id`, updateProduct)
productsRouter.delete(`/admin${baseURI}/:id`, deleteProduct)

//router.route('/products').get(getProducts);
// router.route('/products/new').post(newProduct);

module.exports = productsRouter