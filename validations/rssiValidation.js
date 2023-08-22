/**
 * Validation du RSSI (Received Signal Strength Indicator).
 *
 * @param {string} RSSI - Le champ RSSI reçu de l'API.
 * @returns {boolean} Renvoie true si le RSSI est valide, sinon false.
 */
function isValidRSSI(RSSI) {
  const rssiNumber = parseInt(RSSI, 10);

  // Vérification des bornes du nombre (entre -70 et 0)
  if (isNaN(rssiNumber) || rssiNumber < -70 || rssiNumber > 0) {
    console.error('RSSI invalide.');
    return false;
  }

  return true;
}

module.exports = isValidRSSI;
