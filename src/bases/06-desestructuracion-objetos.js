console.log("Hola Mundo!");

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    clave: 'Ironman',
};

const useContext = ({ edad, clave }) => {
    return { nombreClave: clave, edad: edad };
};

console.log(persona);

const { nombre, apellido } = persona;

console.log(nombre);
console.log(apellido);


const getNombre = ({ nombre }) => nombre;
console.log(getNombre(persona));

const avenger = useContext(persona);