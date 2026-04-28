import { replicarTexto } from './funciones22.js';

// Seleccionamos los elementos necesarios mediante querySelector
const inputTexto = document.querySelector('#entrada-texto');
const parrafoResultado = document.querySelector('#resultado');

// Escuchamos el evento 'input' para detectar cambios mientras se escribe
inputTexto.addEventListener('input', (event) => {
    // event.target.value contiene el texto actual del campo
    const textoActual = event.target.value;
    
    // Llamamos a la función importada para actualizar la interfaz dinámicamente
    replicarTexto(textoActual, parrafoResultado);
});