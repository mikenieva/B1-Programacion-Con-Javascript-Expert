##### Ejemplo 6
## Spread Operator

### OBJETIVO

Aprender a utilizar la propuesta de "Spread Operator" en ES6.

### DESARROLLO
1. Para poder unir arreglos u objetos bajo una misma variable, puedes utilizar "Spread Operator". En arreglos, creas la variable, abres un corchetes y dentro, en donde quieras colocar el otro arreglo, lo insertas usando tres puntos suspensivos y el nombre de la variable que contiene el arreglo. Observa el siguiente ejemplo:

```javascript
const array = [1, 2];
const array2 = [...array, 3, 4];
console.log(array2) // [1, 2, 3, 4]
```
2. Para lograr esta misma operación pero con objetos, utiliza los 3 puntos suspensivos y ahora coloca el nombre de la variable que contenta otro objeto. Observa el siguiente ejemplo.

```javascript
const obj1 = {a: 'a', b: 'b'};
const obj2 = {c: 'c', ...obj1};

console.log(obj2) 
// {a: 'a', b: 'b', c: 'c'}
```
