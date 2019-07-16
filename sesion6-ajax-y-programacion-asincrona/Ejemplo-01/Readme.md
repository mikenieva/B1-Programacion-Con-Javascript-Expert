##### Ejemplo 01
## Eventloop

### OBJETIVO

### DESARROLLO
1. 

```javascript
console.log('Starting App');

setTimeout(() => {
  console.log('Inside of callback')
}, 2000);

setTimeout(() => {
  console.log('another callback');
}, 0)

console.log('Finishing up');

```

