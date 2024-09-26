const Flight = require('../models/Flight');

// Get all flights
exports.getAllFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.status(200).json(flights);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a flight by ID
exports.getFlightById = async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        if (!flight) {
            return res.status(404).json({ error: "Flight not found" });
        }
        res.status(200).json(flight);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new flight
exports.createFlight = async (req, res) => {
    try {
        const flight = new Flight(req.body);
        await flight.save();
        res.status(201).json(flight);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a flight by ID
exports.updateFlight = async (req, res) => {
    try {
        const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!flight) {
            return res.status(404).json({ error: "Flight not found" });
        }
        res.status(200).json(flight);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a flight by ID
exports.deleteFlight = async (req, res) => {
    try {
        const flight = await Flight.findByIdAndDelete(req.params.id);
        if (!flight) {
            return res.status(404).json({ error: "Flight not found" });
        }
        res.status(200).json({ message: "Flight deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
