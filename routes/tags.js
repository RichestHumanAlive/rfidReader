const express = require('express');
const router = express.Router();

const epcValidation = require('../validations/epcValidation');
const antennaValidation = require('../validations/antennaValidation');
const rssiValidation = require('../validations/rssiValidation');
const timestampValidation = require('../validations/timestampValidation');

router.post('/process-tags', (req, res) => {
  const { EPC, Antenna, RSSI, Timestamp } = req.body;

  // Validations
  if (!epcValidation(EPC) || !antennaValidation(Antenna) || !rssiValidation(RSSI) || !timestampValidation(Timestamp)) {
    console.error('Données invalides.');
    return;
  }

  // Traitement des tags RFID
  res.send('Tags traités avec succès.');
});

module.exports = router;
