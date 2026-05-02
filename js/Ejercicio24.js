import { mostrarSeleccion } from './funciones24.js';

const opcionesRadio = document.querySelectorAll('input[name="lenguaje"]');
const parrafoResultado = document.querySelector('#texto-resultado');

opcionesRadio.forEach(radio => {
    radio.addEventListener('change', (event) => {
        const valorSeleccionado = event.target.value;
        
        mostrarSeleccion(valorSeleccionado, parrafoResultado);
    });
});