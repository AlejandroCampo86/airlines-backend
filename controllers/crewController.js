// controllers/crewController.js
const Crew = require('../models/Crew');

exports.getAllCrew = async (req, res) => {
    try {
        const crew = await Crew.find();
        res.status(200).json(crew);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addCrew = async (req, res) => {
    const newCrew = new Crew(req.body);
    try {
        const savedCrew = await newCrew.save();
        res.status(201).json(savedCrew);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
