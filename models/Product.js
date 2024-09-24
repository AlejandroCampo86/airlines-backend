const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
    sku: { type: String, required: true, unique: true },
    name: String,
    description: String,
    price: Number,
    stock: Number,
    category: String,
    weight: Number,
    dimensions: String,
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
