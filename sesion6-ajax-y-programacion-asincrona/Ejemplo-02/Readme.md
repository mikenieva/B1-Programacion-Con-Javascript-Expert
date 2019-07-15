##### Ejemplo 02
## CALLBACK 

### OBJETIVO


### DESARROLLO
1. 

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
