/**
 * Cambia el texto de un elemento específico.
 * @param {HTMLElement} elemento - El objeto del DOM a modificar.
 * @param {string} nuevoTexto - El texto que se desea mostrar.
 */
export function modificarTexto(elemento, nuevoTexto) {
    if (elemento) {
        elemento.textContent = nuevoTexto;
    }
}