const Crew = require('../models/Crew');

// Obtener todos los miembros de la tripulación
exports.getAllCrew = async (req, res) => {
    try {
        const crewMembers = await Crew.find();
        res.status(200).json(crewMembers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un miembro de la tripulación por ID
exports.getCrewById = async (req, res) => {
    try {
        const crewMember = await Crew.findById(req.params.id);
        if (!crewMember) {
            return res.status(404).json({ error: "Crew member not found" });
        }
        res.status(200).json(crewMember);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo miembro de la tripulación
exports.createCrew = async (req, res) => {
    try {
        const crewMember = new Crew(req.body);
        await crewMember.save();
        res.status(201).json(crewMember);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un miembro de la tripulación por ID
exports.updateCrew = async (req, res) => {
    try {
        const crewMember = await Crew.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!crewMember) {
            return res.status(404).json({ error: "Crew member not found" });
        }
        res.status(200).json(crewMember);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un miembro de la tripulación por ID
exports.deleteCrew = async (req, res) => {
    try {
        const crewMember = await Crew.findByIdAndDelete(req.params.id);
        if (!crewMember) {
            return res.status(404).json({ error: "Crew member not found" });
        }
        res.status(200).json({ message: "Crew member deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
