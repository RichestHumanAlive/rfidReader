/**
 * Validation du timestamp.
 *
 * @param {string} timestamp - Le champ timestamp reçu de l'API.
 * @returns {boolean} Renvoie true si le timestamp est valide, sinon false.
 */
function isValidtimestamp(timestamp) {
  const timestampNumber = parseInt(timestamp, 10);

  // Vérification du format et de la longueur 
  if (isNaN(timestampNumber) || timestamp.length !== 13) {
    console.error('timestamp invalide.');
    return false;
  }

  return true;
}

module.exports = isValidtimestamp;
