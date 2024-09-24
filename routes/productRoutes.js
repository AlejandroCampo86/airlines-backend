const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define the routes for product operations

// Create a new product
router.post('/products', productController.createProduct);

// Get all products
router.get('/products', productController.getAllProducts);

// Get a product by SKU
router.get('/products/:sku', productController.getProductBySKU);

// Update a product by SKU
router.put('/products/:sku', productController.updateProduct);

// Delete a product by SKU
router.delete('/products/:sku', productController.deleteProduct);

module.exports = router;
