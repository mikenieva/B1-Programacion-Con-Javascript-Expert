##### Ejemplo 5
## Default Parameters

### OBJETIVO

Aprender a utilizar la propuesta de "Default Parameters" en ES6.

### DESARROLLO
1. "Default Parameters" es una técnica que permite asignar un valor por defecto al parámetro en caso de que no tengamos un valor correspondido cuando lo estamos invocando. Observa el siguiente ejemplo:

```javascript
    function add (a=3, b=5) {
        return a + b; 
    }

    add(4,2) // 6
    add(4) // 9
    add() // 8
```
