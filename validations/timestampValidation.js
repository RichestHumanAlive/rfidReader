/**
 * Validation du timestamp.
 *
 * @param {string} Timestamp - Le champ Timestamp reçu de l'API.
 * @returns {boolean} Renvoie true si le timestamp est valide, sinon false.
 */
function isValidTimestamp(Timestamp) {
  const timestampNumber = parseInt(Timestamp, 10);

  // Vérification du format et de la longueur 
  if (isNaN(timestampNumber) || Timestamp.length !== 13) {
    console.error('Timestamp invalide.');
    return false;
  }

  return true;
}

module.exports = isValidTimestamp;
