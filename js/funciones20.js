/**
 * Genera el mensaje con el formato solicitado para el alert.
 * @param {string} nom - Nombre del estudiante
 * @param {string} ape - Apellido del estudiante
 * @param {string} libreta - LU del estudiante
 * @returns {string} Mensaje formateado
 */
export function formatearMensaje(nom, ape, libreta) {
    return `Los datos ingresados son:\nNombre: ${nom}\nApellido: ${ape}\nLibreta Universitaria: ${libreta}`;
}