// controllers/aircraftController.js
const Aircraft = require('../models/Aircraft');

exports.getAllAircraft = async (req, res) => {
    try {
        const aircraft = await Aircraft.find();
        res.status(200).json(aircraft);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addAircraft = async (req, res) => {
    const newAircraft = new Aircraft(req.body);
    try {
        const savedAircraft = await newAircraft.save();
        res.status(201).json(savedAircraft);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
