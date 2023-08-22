/**
 * Validation de l'EPC (Electronic Product Code).
 *
 * @param {string} EPC - Le champ EPC reçu de l'API.
 * @returns {boolean} Renvoie true si l'EPC est valide, sinon false.
 */
function isValidEPC(EPC) {
  // Suppression des tirets s'ils sont présents
  const cleanedEPC = EPC.replace(/-/g, '');

  // Vérification de la longueur et du format
  if (cleanedEPC.length !== 24 || !/^E98A25\d{8}$/.test(cleanedEPC)) {
    console.error('EPC invalide.');
    return false;
  }

  return true;
}

module.exports = isValidEPC;