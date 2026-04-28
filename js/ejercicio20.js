import { formatearMensaje } from './funciones20.js';

// Capturamos el botón que dispara la acción
const boton = document.querySelector('#btn-mostrar');

// Capturamos los inputs mediante querySelector
const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputLU = document.querySelector('#lu');

// Escuchamos el evento click
boton.addEventListener('click', () => {
    // Obtenemos los valores con la propiedad .value
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const lu = inputLU.value;

    // Generamos el mensaje usando la función importada
    const mensajeFinal = formatearMensaje(nombre, apellido, lu);

    // Mostramos el resultado
    alert(mensajeFinal);
});