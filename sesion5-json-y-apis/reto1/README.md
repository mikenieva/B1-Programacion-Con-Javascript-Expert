##### Reto 01
## Lista aleatoria de imágenes de perritos

### OBJETIVO

* Acceder a una API y renderizar un archivo .html

### DESARROLLO

1. Primero, identifica la API a la cual te vas a conectar y verifica que la dirección URL te regrese un JSON. Para encontrar la documentación, deberás entrar a https://dog.ceo/dog-api/.
2. Una vez hecho esto, utilizaremos `fetch` para extraer los datos.
3. Ya que los hayas extraido, renderízalos a través de un archivo index.html para su maquetación.

```javascript
const boton = document.getElementById("botonperros")
const areaperros = document.getElementById("areaperros")

boton.addEventListener("click", () => {
    
    fetch(`https://dog.ceo/api/breeds/image/random/3`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        areaperros.innerHTML = `
            <img src="${data.message[0]}"/>
            <img src="${data.message[1]}"/>
            <img src="${data.message[2]}"/>
        `

    })

})
```
