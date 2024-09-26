const express = require('express');
const router = express.Router();
const crewController = require('../controllers/crewController');

// Obtener todos los miembros de la tripulación
router.get('/', crewController.getAllCrew);

// Obtener un miembro de la tripulación por ID
router.get('/:id', crewController.getCrewById);

// Crear un nuevo miembro de la tripulación
router.post('/', crewController.createCrew);

// Actualizar un miembro de la tripulación por ID
router.put('/:id', crewController.updateCrew);

// Eliminar un miembro de la tripulación por ID
router.delete('/:id', crewController.deleteCrew);

module.exports = router;
