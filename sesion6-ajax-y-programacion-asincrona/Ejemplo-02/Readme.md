##### Ejemplo 02
## Saludo 

### OBJETIVO
Aplicar el conocimiento sobre métodos de arreglo para multiplicar números. 

### DESARROLLO
1. Primero, declaramos la función "saludar".
2. Luego, declaramos la función "interacciónUsuario". En esta segunda, observa que estamos pasando como parámetro un concepto llamado 
callback. Es decir, las funciones no sólo pueden pasar tipos de datos, sino también funciones. Y estas se ejecutan dentro de otra función.
3. Invocamos interaccionUsuario y colocamos como argumento la función `saludar`.
4. Observa cómo se ejecuta primero interacciónUsuario y al llegar al callback, ejecuta la función `saludar`. Esto significa que puedes ir enlazando funciones para que se ejecuten en cadena.

```javascript
const saludar = nombre => {
    alert('Hola ' + nombre);
  }
  
const interaccionUsuario = (callback) => {
    const nombre = prompt("Ingresa tu nombre.");
    callback(nombre);
  }
  
  interaccionUsuario(saludar);
```
