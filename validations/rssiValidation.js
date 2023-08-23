/**
 * Validation du rssi (Received Signal Strength Indicator).
 *
 * @param {string} rssi - Le champ rssi reçu de l'API.
 * @returns {boolean} Renvoie true si le rssi est valide, sinon false.
 */
function isValidrssi(rssi) {
  const rssiNumber = parseInt(rssi, 10);

  // Vérification des bornes du nombre (entre -70 et 0)
  if (isNaN(rssiNumber) || rssiNumber < -70 || rssiNumber > 0) {
    console.error('rssi invalide.');
    return false;
  }

  return true;
}

module.exports = isValidrssi;
