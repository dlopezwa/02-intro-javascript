console.log("Hola Mundo!");


const nombre = 'David';
const apellido = 'Lopez';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return `Hola Mundo, soy ${nombre}`;
}

console.log(`${ getSaludo('Goku') }`);