##### Ejemplo 7
## Rest Parameter

### OBJETIVO

### DESARROLLO
1. 

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