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
