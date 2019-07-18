##### Ejemplo 7
## Rest Parameter

### OBJETIVO

Entender cómo utilizar la propuesta de "Rest Parameter" en ES6.

### DESARROLLO
1. En algunos casos, necesitarás conocer todos los argumentos que se colocan dentro de una función, sin saber la cantidad exacta. Para poder extraer todos los argumentos puedes utilizar el parámetro "Rest", el cual implica colocar como parámetro en la declaración de la función tres puntos suspensivos y luego la palabra "args" (`...args`). 

En el siguiente ejemplo vemos cómo se aplica a una suma.

```javascript
const sumAll (...args) { 
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6
```
