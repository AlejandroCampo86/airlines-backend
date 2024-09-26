const mongoose = require('mongoose');

// Define the Flight schema
const flightSchema = new mongoose.Schema({
    number: { type: String, required: true, unique: true },
    departure: { type: String, required: true },
    destination: { type: String, required: true },
    departureDate: { type: Date, required: true },
    arrivalDate: { type: Date, required: true },
    inventory: { type: Number, default: 0 },
}, {
    timestamps: true  // Adds createdAt and updatedAt fields
});

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;
