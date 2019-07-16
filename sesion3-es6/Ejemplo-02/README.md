##### Ejemplo 2
## let / const - Contextos

### OBJETIVO

### DESARROLLO
1. 

```javascript
function numero ( ) {
   let i = 30
   console.log(i)
}
numero ( )   // 30
```

```javascript
let i = 10
function numero ( ) {
   let i = 30
   console.log(i)
}
numero( ) // 30
console.log(i) // 10 
```

![Constantes](../assets/constantes.png)