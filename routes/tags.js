const express = require('express');
const router = express.Router();
const mysql = require('mysql2'); // Module MySQL

const epcValidation = require('../validations/epcValidation');
const antennaValidation = require('../validations/antennaValidation');
const rssiValidation = require('../validations/rssiValidation');
const timestampValidation = require('../validations/timestampValidation');

const db = require('../db');

// Intervalle de temps à respecter en millisecondes
const interval = 10000;

// Stocker les dernières lectures de tags
const lastReads = {};

// Middleware pour gérer l'intervalle de temps
const handleInterval = (req, res, next) => {
  const { epc, antenna } = req.body;

  // Vérification de  l'existance de la lecture précédente et du respect de l'intervalle  de temps
  if (lastReads[`${epc}-${antenna}`] && Date.now() - lastReads[`${epc}-${antenna}`] < interval) {
    
    console.warn('Violation de l\'intervale minimal de 10 secondes. EPC ignoré.')
    return ;
  }

  // Mettre à jour la dernière lecture
  lastReads[`${epc}-${antenna}`] = Date.now();


  next();
};


router.post('/process-tags', handleInterval, (req, res) => {
  const { epc, antenna, rssi, timestamp } = req.body;

  // Validations
  if (!epcValidation(epc) || !antennaValidation(antenna) || !rssiValidation(rssi) || !timestampValidation(timestamp)) {
    res.status(400).send('Ereur de traitement des tags.');
    return;
  }

  
  // Insertionr des données dans la base de données
  const query = 'INSERT INTO tagread (epc, antenna, rssi, timestampreader, timestamprecv) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [epc, antenna, rssi, timestamp, Date.now()], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion des données :', err);
      res.status(500).send('Erreur lors du traitement des données.');
      return;
    }
    console.log('Données insérées dans la base de données.');
    res.status(200).json({ message: 'Tags traités avec succès et enregistrés dans la base de données.'});
  });

});

module.exports = router;
