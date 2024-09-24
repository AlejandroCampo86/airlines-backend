// routes/passengers.js
const express = require('express');
const router = express.Router();
const passengerController = require('../controllers/passengerController');

router.get('/', passengerController.getAllPassengers);
router.post('/', passengerController.addPassenger);

module.exports = router;
