import { cambiarColor, colorAleatorio } from "./funciones25.js";

const boton = document.getElementById("btn-cambiar");

boton.addEventListener("click", () => {
    const nuevoColor = colorAleatorio();
    cambiarColor(nuevoColor);
});