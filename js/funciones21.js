/**
 * Sincroniza el índice de la lista de destino con la lista de origen.
 * @param {HTMLSelectElement} origen - El select que cambió.
 * @param {HTMLSelectElement} destino - El select que debe actualizarse.
 */
export function sincronizarListas(origen, destino) {
    // Igualamos el índice seleccionado del segundo select al del primero
    destino.selectedIndex = origen.selectedIndex;

    // Obtenemos los valores actuales
    const pais = origen.value;
    const capital = destino.value;

    // Mostramos el mensaje solicitado en consola
    console.log(`Selección actual -> País: ${pais} | Capital: ${capital}`);
}