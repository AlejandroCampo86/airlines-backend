// routes/aircraft.js
const express = require('express');
const router = express.Router();
const aircraftController = require('../controllers/aircraftController');

router.get('/', aircraftController.getAllAircraft);
router.post('/', aircraftController.addAircraft);

module.exports = router;
