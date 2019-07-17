##### Ejemplo 03
## CALLBACK 

### OBJETIVO
Observemos cómo se conecta un callback ahora bajo un ejemplo de asincronía.

### DESARROLLO
1. Primero, generamos la función `getUser`, el cual incluirá un tipo de dato `Number`y un callback (una función).
2. Dentro de esta función `getUser`, tendremos la ejecución asincrona `setTimeout`, en el cual, dentro, al cumplir los 2000 milisegundos, ejecutará el callback, pasando como argumento el usuario (`user`).
3. Al invocar getUser, observa que le pasamos el `Number` y luego, la función, la cual será ejecutada dentro del setTimeout cuando llegue su momento.

```javascript


// CALLBACK: EJEMPLO 3


const getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Mike'
    }

    setTimeout(() => {
        callback(user)
    }, 2000)
}

getUser(31, userObject => {
    console.log(userObject)
})




```
