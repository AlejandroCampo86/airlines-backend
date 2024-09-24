// routes/crew.js
const express = require('express');
const router = express.Router();
const crewController = require('../controllers/crewController');

router.get('/', crewController.getAllCrew);
router.post('/', crewController.addCrew);

module.exports = router;
