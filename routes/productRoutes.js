const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define the routes for product operations

// Create a new product
router.post('/', productController.createProduct);

// Get all products
router.get('/', productController.getAllProducts);

// Get a product by SKU
router.get('/:sku', productController.getProductBySKU);

// Update a product by SKU
router.put('/:sku', productController.updateProduct);

// Delete a product by SKU
router.delete('/:sku', productController.deleteProduct);

module.exports = router;
