##### Reto 01
## Lista aleatoria de imágenes de perritos

### OBJETIVO

* Acceder a una API y renderizar un archivo .html

### DESARROLLO

1. 

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
