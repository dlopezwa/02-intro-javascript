console.log("Hola Mundo!");

const persona = {
    nombre: 'David',
    apellido: 'Lopez',
    edad: 38,
    direccion: {
        ciudad: 'New York',
        latitu: 14,
        longitud: 123,
    }
};

const otraPersona = {...persona, };
otraPersona.nombre = 'Tony';
otraPersona.apellido = 'Stark';

console.log(persona);
console.log(otraPersona);