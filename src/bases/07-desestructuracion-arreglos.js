const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes;

console.log(p3);


const getArreglo = () => ['ABC', 123];

const [letras, numeros] = getArreglo();

console.log(getArreglo());
console.log(letras);
console.log(numeros);

const desestructuraArreglo = (valor) => {
    return [valor, () => console.log('Hola Mundo')];
};
const [arreglo, setNombre] = desestructuraArreglo('Goku');
console.log(arreglo);
setNombre();