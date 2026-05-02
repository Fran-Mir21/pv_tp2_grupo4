export function sincronizarListas(origen, destino) {
    destino.selectedIndex = origen.selectedIndex;

    const pais = origen.value;
    const capital = destino.value;

    console.log(`Selección actual -> País: ${pais} | Capital: ${capital}`);
}