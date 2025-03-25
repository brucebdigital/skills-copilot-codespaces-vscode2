/**
 * Calcula a soma de dois números.
 * @param {number} var1 - O primeiro número.
 * @param {number} var2 - O segundo número.
 * @returns {number} A soma de var1 e var2.
 * @throws {TypeError} Se algum dos argumentos não for um número.
 */
function calculateNumbers(var1, var2) {
    if (typeof var1 !== 'number' || typeof var2 !== 'number') {
        throw new TypeError('Ambos os argumentos devem ser números');
    }
    return var1 + var2;
}