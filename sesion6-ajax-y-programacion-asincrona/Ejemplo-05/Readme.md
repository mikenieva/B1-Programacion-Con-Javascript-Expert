##### Ejemplo 05
## PROMESAS

### OBJETIVO

### DESARROLLO
1. Una alternativa más moderna y acoplada a las necesidades de hoy es utilizar "Promesas", en lugar de "Callbacks".
2. Las promesas tienen dos partes. La primera cuando la declaras dentro de una función y utilizas la sintaxis `new Promise`. A esta la invocarás y le pasarás como parámetro dos funciones (resolve, reject). Dentro de las sentencias, ejecutarás `Resolve` cuando la promesa se cumpla exitosamente y  `Reject` cuando la promesa falle o tenga problemas.
3. Una vez declarada la función con una promesa dentro, iremos a la invocación, la cual, dependiendo del resultado la conectarás con la sintaxis .then(), la cual significa que si la promesa se ejecutó correctamente (resolve), entonces traslada el retorno a la siguiente sección. En caso de que haya un fallo (reject), utilizaremos (.catch)


```javascript


// PROMESAS: EJEMPLO 5


const asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b)
            } else {
                reject('Los argumentos deben ser números')
            }
        }, 1500)
    })
}

asyncAdd(3, 7).then((res) => {
    console.log('Result1:', res)
    return asyncAdd(res, 33)
}).then((res) => {
    console.log('Should be 45: ', res)
}).catch((errorMessage) => {
    console.log(errorMessage)
})

```
