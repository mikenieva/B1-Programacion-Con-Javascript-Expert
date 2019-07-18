##### Ejemplo 4
## Arrow Functions

### OBJETIVO
Aprender a utilizar la propuesta de "Arrow Functions" o "funciones de flecha", en ES6.

### DESARROLLO
1. "Arrow Functions" es la nueva forma de crear funciones a través de la sintaxis de flecha. Corresponde a primero colocar una constante y asignarle una función. En este caso, utilizarás paréntesis, luego "flecha" que significa un caracter "igual" y "mayor que" juntos  `=>`.

2. En caso de que la función tenga únicamente una sentencia de ejecución, puedes ahorrarte el return y las llaves, colocando directamente la sentencia en la misma línea. Observa el último ejemplo.

```javascript
var multiplyES5 = function(x, y) {
  return x * y;
};
```

```javascript
const multiplyA = (x, y) => { 
return x * y 
};
const multiplyB = (x,y) => x*y
```
