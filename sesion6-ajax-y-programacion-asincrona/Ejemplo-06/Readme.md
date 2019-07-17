##### Ejemplo 06
## ASYNC - AWAIT 

### OBJETIVO

### DESARROLLO
1. Async y Await son dos propuestas nuevas por parte de ES6, en el cual fortalecen el concepto de las "Promesas".
2. La forma cómo se utilizan es declarando en la función la palabra async al inicio de la misma, implicando que utilizarás asincronía dentro.
3. Luego, genera una constante y en el área de generación valor, coloca `await`. Esto significará que el programa "esperará" hasta que tenga el resultado para asignarlo y luego continuar con el resto. 

```javascript

// ASYNC - AWAIT : EJEMPLO 6  (5 minutos)

async function getUsers(){
    let result = await fetchJSON('/users')
    console.log(result)
}
```
