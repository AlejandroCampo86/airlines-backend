// models/Sale.js
const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    amount: { type: Number, required: true },
});

module.exports = mongoose.model('Sale', SaleSchema);
