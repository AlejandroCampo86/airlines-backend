const Barset = require('../models/Barset');

// Obtener todos los barsets
exports.getAllBarsets = async (req, res) => {
    try {
        const barsets = await Barset.find();
        console.log('barsets found', barsets);
        res.status(200).json(barsets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo barset
exports.createBarset = async (req, res) => {
    try {
        const barset = new Barset(req.body);
        await barset.save();
        res.status(201).json(barset);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar el estado de un barset
exports.updateBarsetStatus = async (req, res) => {
    try {
        const barset = await Barset.findByIdAndUpdate(
            req.params.id,
            { stockStatus: req.body.stockStatus },
            { new: true }
        );
        if (!barset) {
            return res.status(404).json({ error: "Barset not found" });
        }
        res.status(200).json(barset);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un barset
exports.deleteBarset = async (req, res) => {
    try {
        const barset = await Barset.findByIdAndDelete(req.params.id);
        if (!barset) {
            return res.status(404).json({ error: "Barset not found" });
        }
        res.status(200).json({ message: "Barset deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
