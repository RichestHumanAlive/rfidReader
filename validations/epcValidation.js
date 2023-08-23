/**
 * Validation de l'epc (Electronic Product Code).
 *
 * @param {string} epc - Le champ epc reçu de l'API.
 * @returns {boolean} Renvoie true si l'epc est valide, sinon false.
 */
function isValidepc(epc) {
  // Suppression des tirets s'ils sont présents
  const cleanedepc = epc.replace(/-/g, '');

  // Regex d'exactement 24 caractères respectant les conditions : 
  // Commencer par 'E98A25', se terminer par 8 chiffres et avoir 24 caractères hexadécimaux au total
  const regex = /^E98A25[0-9A-Fa-f]{10}[0-9]{8}$/;

  // Vérification de la longueur et du format
  if (!regex.test(cleanedepc)) {
    console.error('epc invalide.');
    return false;
  }

  return true;
}

module.exports = isValidepc;