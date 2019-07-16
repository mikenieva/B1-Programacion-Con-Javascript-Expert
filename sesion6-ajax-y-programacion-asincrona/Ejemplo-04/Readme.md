##### Ejemplo 04
## CALLBACK 

### OBJETIVO


### DESARROLLO
1. 

```javascript


// CALLBACK: EJEMPLO 4

const saludar = (letra, callback) => {
    callback(letra)
}

const despedirse = (letra, cb) => {
    cb(letra)
}

saludar("hola1", (cachandoLetra) => {
    console.log(`${cachandoLetra} mundo`)
    saludar("hola2", (cachandoLetra) => {
        console.log(`${cachandoLetra} mundo`)
        saludar("hola3", (cachandoLetra) => {
            console.log()
        })
    })
})



```
