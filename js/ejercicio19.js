import { modificarTexto } from './funciones19.js';

const parrafo = document.getElementById('mi-parrafo');
const boton = document.getElementById('btn-cambiar');

boton.addEventListener('click', () => {
    const mensajeActualizado = "EJERCICIO 19 javascript completo";
    modificarTexto(parrafo, mensajeActualizado);
});