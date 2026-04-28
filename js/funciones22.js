/**
 * Actualiza el contenido de un elemento con el valor proporcionado.
 * @param {string} valor - El texto proveniente del input.
 * @param {HTMLElement} destino - El elemento donde se mostrará el texto.
 */
export function replicarTexto(valor, destino) {
    if (destino) {
        // Asignamos el valor al contenido del texto del elemento destino
        destino.textContent = valor;
    }
}