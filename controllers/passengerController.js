// controllers/passengerController.js
const Passenger = require('../models/Passenger');

exports.getAllPassengers = async (req, res) => {
    try {
        const passengers = await Passenger.find();
        res.status(200).json(passengers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addPassenger = async (req, res) => {
    const newPassenger = new Passenger(req.body);
    try {
        const savedPassenger = await newPassenger.save();
        res.status(201).json(savedPassenger);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
