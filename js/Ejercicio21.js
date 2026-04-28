import { sincronizarListas } from './funciones21.js';

// Seleccionamos los elementos select
const selectPaises = document.querySelector('#paises');
const selectCapitales = document.querySelector('#capitales');

// Escuchamos el evento 'change' en la lista de países
selectPaises.addEventListener('change', () => {
    sincronizarListas(selectPaises, selectCapitales);
});

// Ejecutamos una vez al cargar para mostrar el estado inicial en consola
sincronizarListas(selectPaises, selectCapitales);