import { sincronizarListas } from './funciones21.js';

const selectPaises = document.querySelector('#paises');
const selectCapitales = document.querySelector('#capitales');

selectPaises.addEventListener('change', () => {
    sincronizarListas(selectPaises, selectCapitales);
});

sincronizarListas(selectPaises, selectCapitales);