// controllers/salesController.js
const Sale = require('../models/Sales');

exports.getAllSales = async (req, res) => {
    try {
        const sales = await Sale.find();
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addSale = async (req, res) => {
    const newSale = new Sale(req.body);
    try {
        const savedSale = await newSale.save();
        res.status(201).json(savedSale);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
