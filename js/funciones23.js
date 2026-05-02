export function procesarEntrada(texto, pSalida, divVisor) {
    pSalida.textContent = texto || "Esperando entrada...";

    if (texto.length > 20) {
        divVisor.classList.add('visor-alerta');
    } else {
        divVisor.classList.remove('visor-alerta');
    }
}
export function actualizarContador(longitud, elementoContador) {
    elementoContador.textContent = `Caracteres: ${longitud}`;
}