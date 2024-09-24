// models/Passenger.js
const mongoose = require('mongoose');

const PassengerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    seat: { type: String, required: true },
});

module.exports = mongoose.model('Passenger', PassengerSchema);
