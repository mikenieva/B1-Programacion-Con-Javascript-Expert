##### Ejemplo 07
## ASYNC - AWAIT 

### OBJETIVO

### DESARROLLO
1. Siendo más prácticos, async y await (junto con las promesas) se ejecutan muy bien cuando necesitamos extraer datos de una base de datos externa (a través de una API, por ejemplo).
2. Conforme se vayan ejecutando las sentencias, la sintaxis `await` permite "esperar" el resultado para luego continuar con el programa y vayamos adquiriendo todos los datos consecutivamente.


```javascript

// ASYNC - AWAIT : EJEMPLO 7 (15 minutos)

async function getUserFriends(){
    let user = await fetchJSON('users/me')
    let friendsIDs = await fetchJSON(`/friends/${user.id}`)
    let promises = friendIDs.map((id) => {
        return fetchJSON(`/users/${id}`);
    })
    let friends = await Promise.all(promises)
    console.log(friends)
}
let promise = getUserFriends()

```
