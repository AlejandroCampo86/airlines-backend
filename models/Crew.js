// models/Crew.js
const mongoose = require('mongoose');

const CrewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
});

module.exports = mongoose.model('Crew', CrewSchema);
