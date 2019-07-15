##### RETO-01
## PELÍCULAS

### OBJETIVO
Aprender a utilizar y crear funciones dentro de un arreglo de objetos. 

### DESARROLLO
1. Crea un arreglo de objetos que refleje una lista de 10 películas cuyas propiedades sean id, título, actores, descripción, fecha de lanzamiento. 

2. Crea una función que devuelva un arreglo de objetos con todos los datos pero con las letras del título en mayúsculas.

3. Crea una función que devuelva un arreglo de objetos que incluya únicamente la película más reciente.

4. Crea una función que devuelva un arreglo de objetos con todos los datos pero que sólo contenga únicamente el id y el título.

```javascript
const movies = [
    {
        id: 1300,
        titulo: "avengers: Endgame",
        actores: ["Robert Downey Jr.", "Chris Evans", "Tom Holland"],
        descripcion: "Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.",
        fechaDeLanzamiento: "26 de Abril de 2019"
    },
    {
        id: 1301,
        titulo: "aquarela",
        actores: ["Hayat Mokhenache", "Peter Madej"],
        descripcion: "Aquarela lleva a la audiencia a una profunda aventura cinemática sobre la poderosa y transformadora belleza del agua.",
        fechaDeLanzamiento: "12 de diciembre de 2018"
    },
    {
        id: 1302,
        titulo: "frozen II",
        actores: ["Kristen Bell", "Idina Menzel", "Jonathan Groff", "Josh Gad"],
        descripcion: "La reina Elsa, su hermana Anna, Kristoff, Olaf y Sven se embarcan en un nuevo viaje al interior del bosque para descubrir la verdad sobre un antiguo misterio de su reino.s",
        fechaDeLanzamiento: "15 noviembre de 2019 "
    },
    {
        id: 1303,
        titulo: "spiderman: Far from home",
        actores: ["Tom Holland", "Zendaya", "Jake Gyllenhaal"],
        descripcion: "Peter Parker decide pasar unas merecidas vacaciones en Europa junto a MJ, Ned y el resto de sus amigos. Sin embargo, Peter debe volver a ponerse el traje de Spider-Man cuando Nick Fury le encomienda una nueva misión: frenar el ataque de unas criaturas que están causando el caos en el continente.",
        fechaDeLanzamiento: " 5 de julio de 2019"
    }
]  

const uppercaseTitles = (arrayMovies) => {
    return arrayMovies.map(e => {
        return e.titulo.charAt(0).toUpperCase()
    })
}

const gettingData = (arrayMovies) => {
    return arrayMovies.map(e => {
        return {
            id: e.id,
            titulo: e.titulo
        }
    })
}
```
