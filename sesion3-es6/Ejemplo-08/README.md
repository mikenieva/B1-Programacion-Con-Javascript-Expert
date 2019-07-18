##### Ejemplo 8
## Destructuring

### OBJETIVO

Conocer la nueva propuesta de destructuración de arreglos y de objetos, bajo el estándar de ES6.

### DESARROLLO
1. La destructuración en arreglos permite, a través de colocar de lado de la sintaxis de variable un par de corchetes, generar variables rápidamente sin tener que hacerlas una por una. 

```javascript
const direccion = [221, 'Roma Norte', 'Mexico'];
const [ numeroCasa, , ciudad ] = direccion;
console.log(numeroCasa, ciudad)  //  221 'Mexico'
```

2. la destructuración en objetos es muy simliar, sólo que el nombre de la variable es la propiedad (`key`) de cada elemento del objeto.

```javascript
const estudiante = {
   nombre: 'Mike',
   apellido: 'Nieva',
   pais: 'Mexico' };
const { nombre, apellido, pais } = estudiante;
console.log(nombre, apellido, pais); // Mike Nieva Mexico
```

