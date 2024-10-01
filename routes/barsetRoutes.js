const express = require('express');
const router = express.Router();
const barsetController = require('../controllers/barsetController');

// Rutas CRUD para Barsets
router.get('/', barsetController.getAllBarsets);
router.post('/', barsetController.createBarset);
router.put('/:id', barsetController.updateBarsetStatus);
router.delete('/:id', barsetController.deleteBarset);

module.exports = router;
