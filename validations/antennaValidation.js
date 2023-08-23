/**
 * Validation de l'antenne.
 *
 * @param {string} antenna - Le champ antenna reçu de l'API.
 * @returns {boolean} Renvoie true si l'antenne est valide, sinon false.
 */
function isValidantenna(antenna) {
  const antennaNumber = parseInt(antenna, 10);

  // Vérification des bornes du nombre (entre 1 et 4)
  if (isNaN(antennaNumber) || antennaNumber < 1 || antennaNumber > 4) {
    console.error('Antenne invalide.');
    return false;
  }

  return true;
}

module.exports = isValidantenna;
