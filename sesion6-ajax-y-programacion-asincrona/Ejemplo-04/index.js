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

