/**
 * Actualiza la interfaz y la consola con el valor seleccionado.
 * @param {string} valor - El valor del radio button seleccionado.
 * @param {HTMLElement} elementoDestino - El elemento donde se mostrará el texto.
 */
export function mostrarSeleccion(valor, elementoDestino) {
    // Actualizar el contenido en el HTML
    elementoDestino.textContent = valor;

    // Mostrar el valor en la consola
    console.log(`Opción seleccionada: ${valor}`);
}