// models/Aircraft.js
const mongoose = require('mongoose');

const AircraftSchema = new mongoose.Schema({
    registration: { type: String, required: true },
    model: { type: String, required: true },
});

module.exports = mongoose.model('Aircraft', AircraftSchema);
