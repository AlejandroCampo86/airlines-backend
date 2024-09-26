const mongoose = require('mongoose');

// Definir el esquema de Crew
const crewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    employeeId: { type: String, required: true, unique: true },
    flight: { type: String },
    status: { type: String, enum: ['Available', 'In Flight', 'Rest'], default: 'Available' }
}, {
    timestamps: true  // Agrega automáticamente createdAt y updatedAt
});

const Crew = mongoose.model('Crew', crewSchema);
module.exports = Crew;
