##### RETO-02
## MULTIPLICA CADA NÚMERO DEL ARREGLO POR 2 

### OBJETIVO
Aplicar el conocimiento sobre métodos de arreglo para multiplicar números. 

### DESARROLLO
1. Crea una función llamada "multiplicarPorDos" que multiplique cada elemento de un arreglo de números por dos.

```javascript
   const multiplicarPorDos = (arreglo) => {
    return arreglo.map((e) => {
        return e*2
    })
}

multiplicarPorDos([1,2,3,4,5])
// => [1,4,6,8,10]

```
