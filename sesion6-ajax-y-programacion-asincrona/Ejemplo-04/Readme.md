##### Ejemplo 04
## CALLBACK 

### OBJETIVO


### DESARROLLO
1. En este punto, sólo quiero que observes que al invocar la función `saludar` y utilizar callbacks, puedes ocasionar un concepto llamado `Callback Hell`, el cual enlazas más de dos funciones y puede llegar a ser caótico su mantenimiento.
2. De preferencia, no ejecutes más alla de dos funciones a través de callbacks, a menos que sea extremadamente necesario.

```javascript


// CALLBACK: EJEMPLO 4

const saludar = (letra, callback) => {
    callback(letra)
}

saludar("hola1", (texto) => {
    console.log(`${texto} mundo`)
    saludar("hola2", (texto) => {
        console.log(`${texto} mundo`)
        saludar("hola3", (texto) => {
            console.log(`${texto} mundo`)
        })
    })
})



```
