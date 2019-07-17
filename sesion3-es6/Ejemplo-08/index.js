const direccion = [221, 'Roma Norte', 'Mexico'];
const [ numeroCasa, , ciudad ] = direccion;
console.log(numeroCasa, ciudad)  //  221 'Mexico'


const estudiante = {
   nombre: 'Mike',
   apellido: 'Nieva',
   pais: 'Mexico' };
const { nombre, apellido, pais } = estudiante;
console.log(nombre, apellido, pais); // Mike Nieva Mexico
