##### Ejemplo 01
## Eventloop

### OBJETIVO

### DESARROLLO
1. La pregunta es: ¿Cuál es el orden de ejecución del siguiente programa?  Bien, una vez que lo hayas pensado, te diremos la respuesta correcta.
2. Primero, se cargará el console.log de la primera línea, el cual comunica `Starting App`. (1)
3. Posteriormente, se leerá la segunda ejecución, pero, al incluir función invocada que promueve asincronía, se pondrá en la pila de espera.
4. Luego, con la tercera ejecución, se pondrá en pila de espera también.
5. Se ejecuta el console.log de `Finishing up` (2)
6. Ahora si, de nuestras funciones asíncronas, observamos que el primero que se carga es la tercera ejecución, porque contiene 0 segundos de ejecución, por lo tanto, ese se ejecutará en el tercer puesto (3).
7. Finalmente, después de 2000 milisegundos, se ejecutará la segunda ejecución, la cual será la última en este programa. (4)

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

