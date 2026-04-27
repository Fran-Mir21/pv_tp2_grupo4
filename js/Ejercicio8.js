const notas = [8, 7, 9, 6, 10, 5, 4, 3, 2, 1];
let suma = 0;
let aprobados = 0;
for (let nota of notas){
    console.log(`Nota: ${nota}`);
    suma += nota;
    if (nota >= 6) {
        console.log(`Aprobado: ${nota}`);
        aprobados++;
    }else{
        console.log(`Desaprobado: ${nota}`);
    }
}
const promedio = suma / notas.length;
console.log(`Promedio: ${promedio}`);
console.log(`Cantidad de aprobados: ${aprobados}`);