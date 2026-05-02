import { formatearMensaje } from './funciones20.js';

const boton = document.querySelector('#btn-mostrar');

const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputLU = document.querySelector('#lu');

boton.addEventListener('click', () => {
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const lu = inputLU.value;

    const mensajeFinal = formatearMensaje(nombre, apellido, lu);

    alert(mensajeFinal);
});