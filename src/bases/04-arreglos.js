console.log("Hola Mundo!");

const arreglo = [1, 2, 3, 4];
const arreglo2 = new Array();
const arreglo3 = [...arreglo, 5];
arreglo.push(1);


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo.map(numero => numero * 2));