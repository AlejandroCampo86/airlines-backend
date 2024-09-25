const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
    sku: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    weight: { type: Number, required: true, min: 0 },
    dimensions: { type: String, required: true }
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
