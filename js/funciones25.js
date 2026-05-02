const colores = ["#ff4d4d", "#28a745", "#007bff", "#ffc107", "#6f42c1"];

export const colorAleatorio = () => {
    const indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
};

export const cambiarColor = (color) => {
    document.body.style.background = color;
    console.log("Color cambiado a:", color);
};