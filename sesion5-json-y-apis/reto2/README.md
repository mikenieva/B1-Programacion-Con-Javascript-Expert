##### Reto 02
## Lista de películas

### OBJETIVO

* Acceder a una API y renderizar un archivo .html

### DESARROLLO

1. Cuando te conectas a una API, recuerda siempre que puede existir un nivel de seguridad extra, el cual se le conoce como API Token. Este último lo que implica es que debes registrarte a la plataforma para que te den un código de acceso y el mismo lo incluirás dentro de tu llamada (URL) para poder leer los datos.

2. Es muy importante que anexes el API Token, de lo contrario no podrás extraer los datos.

3. Entrarás a la página de www.omdbapi.com y extraerás una lista de películas. Posteriormente, las renderizarás dentro de un archivo index.html para su expresión.

```javascript
const button = document.getElementById("busqueda")
const peliculaABuscar = document.getElementById("pelicula-a-buscar")
const listaPeliculas = document.getElementById("lista-peliculas")

//  http://www.omdbapi.com/?apikey=7d2a2a83&s=star+wars&y=2005

button.addEventListener("click", () => {
    const pelicula = peliculaABuscar.value

    fetch(`http://www.omdbapi.com/?s=${pelicula}&apikey=7d2a2a83`)
    .then(response => response.json())
    .then(data => {

        // Capturamos en un const la búsqueda
        const peliculasArribaDelDosMil = data.Search.filter((pelicula) => {
            return pelicula.Year >= 2000
        })

        // Renderizamos las películas
        listaPeliculas.innerHTML = `
            <div id="prueba">
            <hr>
                ${
                    peliculasArribaDelDosMil.map((pelicula) => {
                        return `
                            <img src="${pelicula.Poster}" />
                                <h1>${pelicula.Title}</h1>
                                <p>Year: ${pelicula.Year} </p>
                        `
                    }).join('')
                }
            </div>
        `
    })
})
```
