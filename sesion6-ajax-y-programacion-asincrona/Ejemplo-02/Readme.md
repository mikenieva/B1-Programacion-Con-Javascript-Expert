##### Ejemplo 02
## Saludo 

### OBJETIVO
Aplicar el conocimiento sobre métodos de arreglo para multiplicar números. 

### DESARROLLO
1. 

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
