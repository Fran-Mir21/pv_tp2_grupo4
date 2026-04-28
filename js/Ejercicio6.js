const edades= [19, 5, 42, 2, 77, 30, 27];
let suma = 0;
for (edad of edades) {
    console.log(edad);
    suma += edad;
}
const promedio = suma / edades.length;
console.log(`El promedio de las edades es: ${promedio.toFixed(2)}`);