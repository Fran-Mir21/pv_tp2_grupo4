/**
 * Actualiza el texto y cambia el estilo del contenedor según la longitud.
 * @param {string} texto - El valor del input.
 * @param {HTMLElement} pSalida - Párrafo donde se muestra el texto.
 * @param {HTMLElement} divVisor - Contenedor que cambia de color.
 */
export function procesarEntrada(texto, pSalida, divVisor) {
    // 1. Actualizar el texto
    pSalida.textContent = texto || "Esperando entrada...";

    // 2. Lógica de cambio de color (Condicional de 20 caracteres)
    if (texto.length > 20) {
        divVisor.classList.add('visor-alerta');
    } else {
        divVisor.classList.remove('visor-alerta');
    }
}

/**
 * Actualiza el contador visual de caracteres.
 */
export function actualizarContador(longitud, elementoContador) {
    elementoContador.textContent = `Caracteres: ${longitud}`;
}