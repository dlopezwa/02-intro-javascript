console.log("Hola Mundo!");

const getSaludo = function(nombre) {
    return `Hola, soy ${nombre}`;
};


const getSaludo2 = (nombre) => `Hola, soy ${nombre}`;

console.log(getSaludo);
console.log(`${getSaludo('Goku')}`);
console.log(getSaludo2('Cell'));


const getUsuarioActivo = () => ({
    uid: '000001',
    username: 'dlopezwa',
});

console.log(getUsuarioActivo());