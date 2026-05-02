import { replicarTexto } from './funciones22.js';

const inputTexto = document.querySelector('#entrada-texto');
const parrafoResultado = document.querySelector('#resultado');

inputTexto.addEventListener('input', (event) => {
    const textoActual = event.target.value;
    
    replicarTexto(textoActual, parrafoResultado);
});