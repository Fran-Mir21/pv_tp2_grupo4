import { modificarTexto } from './funciones19.js';

// Selección de elementos del DOM
const parrafo = document.getElementById('mi-parrafo');
const boton = document.getElementById('btn-cambiar');

// Captura del evento clic
boton.addEventListener('click', () => {
    const mensajeActualizado = "EJERCICIO 19 javascript completo";
    modificarTexto(parrafo, mensajeActualizado);
});