import { mostrarSeleccion } from './funciones24.js';

// Seleccionamos todos los inputs radio que tengan el nombre "lenguaje"
const opcionesRadio = document.querySelectorAll('input[name="lenguaje"]');
const parrafoResultado = document.querySelector('#texto-resultado');

// Recorremos cada radio button para agregarle el escucha de eventos
opcionesRadio.forEach(radio => {
    radio.addEventListener('change', (event) => {
        // Obtenemos el valor del radio que disparó el evento
        const valorSeleccionado = event.target.value;
        
        // Llamamos a la función importada para procesar la selección
        mostrarSeleccion(valorSeleccionado, parrafoResultado);
    });
});