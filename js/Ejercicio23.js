import { procesarEntrada, actualizarContador } from './funciones23.js';

const input = document.querySelector('#input-texto');
const visor = document.querySelector('#contenedor-visor');
const salida = document.querySelector('#texto-salida');
const contador = document.querySelector('#contador-chars');

input.addEventListener('input', (e) => {
    const valor = e.target.value;

    // Ejecutamos la lógica de visualización y colores
    procesarEntrada(valor, salida, visor);

    // Actualizamos el contador de caracteres
    actualizarContador(valor.length, contador);
});