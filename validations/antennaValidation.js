/**
 * Validation de l'antenne.
 *
 * @param {string} Antenna - Le champ Antenna reçu de l'API.
 * @returns {boolean} Renvoie true si l'antenne est valide, sinon false.
 */
function isValidAntenna(Antenna) {
  const antennaNumber = parseInt(Antenna, 10);

  // Vérification des bornes du nombre (entre 1 et 4)
  if (isNaN(antennaNumber) || antennaNumber < 1 || antennaNumber > 4) {
    console.error('Antenne invalide.');
    return false;
  }

  return true;
}

module.exports = isValidAntenna;
