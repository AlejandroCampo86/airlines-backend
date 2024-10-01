const mongoose = require('mongoose');

// Definir el esquema para un Barset/Trolley
const barsetSchema = new mongoose.Schema({
    name: { type: String, required: true },        // Nombre del barset
    type: { type: String, required: true },        // Tipo de barset (e.g., trolley)
    homeBase: { type: String, required: true },    // Ubicación o base
    stockStatus: { type: String, default: 'awaiting' },  // Estado actual del trolley
    stockPlan: { type: String },                   // Información de inventario o plan de stock
    dispatchDate: { type: Date },                  // Fecha de despacho, si corresponde
    warehouse: { type: String }                    // Almacén asociado
}, {
    timestamps: true
});

const Barset = mongoose.model('Barset', barsetSchema);
module.exports = Barset;
