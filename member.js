/**
 * Função que retorna informações sobre um membro.
 * @param {string} name - O nome do membro.
 * @param {number} age - A idade do membro.
 * @returns {object} Um objeto contendo o nome e a idade do membro.
 */
function skillsMember(name, age) {
    if (typeof name !== 'string' || typeof age !== 'number') {
        throw new TypeError('Nome deve ser uma string e idade deve ser um número');
    }
    return {
        name: name,
        age: age
    };
}