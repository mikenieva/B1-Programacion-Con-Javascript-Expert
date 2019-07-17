##### Ejemplo 01
## JSON y APIs

### OBJETIVO

### DESARROLLO

1. Primero deberás acceder a la página https://restcountries.eu. Ahí mismo, buscarás la API que contenga todos los países (https://restcountries.eu/#api-endpoints-all).
2. Una vez dentro, tomarás la URL de ejemplo y la colocarás dentro del área de URL. Te deberá retornar un JSON.
3. Si todo está bien, entraremos a nuestro editor y crearemos un archivo `index.html` y otro, `index.js`.
4. Ahora bien, haremos la conexión con un botón que contenga el identificador "mostrarpaises", a través de una constante. 
5. Luego, generaremos una función llamada `buscarPaises`, el cual contendrá la llamada vía `fetch`. `Fetch` pertenece al conjunto de métodos
que el navegador puede hacer y permite extraer datos de una base de datos externa. Acceder a este proceso usualmente se le conoce como API.
6. Dentro de `fetch` colocarás como argumento la dirección URL que retorna el JSON.
7. Luego, utilizarás la sintaxis .then(), con el objetivo de, una vez teniendo el resultado, trasladarlo a una siguiente función para
su manipulación.
8. Entender que primero obtenemos en el primer .then() una respuesta (response), el cual convertiremos en los datos que necesitamos
a través de la invocación .json(), y finalmente en el segundo .then() colocaremos los datos finales para su manipulación.
9. Con los datos extraidos, es momento de renderizarlos sobre el index.html.

```javascript

// 1. VARIABLES

const areaPaises = document.getElementById("mostrarpaises")

// 2. FUNCIONES

const buscarPaises = () => {
    const resultado = fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(datos => {
        console.log(datos)
        datos.map(pais => {
            areaPaises.innerHTML += `
            <div>
                <img class="bandera" src="${pais.flag}" style="width: 30px">
                <h1>${pais.name}</h1>
                <p><b>Región: </b>${pais.region}</p>
                <p>${pais.capital}</p>
                <p>${pais.subregion}</p>
                <ul>
                    <li>Español: ${pais.translations.es}</li>
                    <li>Alemán: ${pais.translations.de} </li>
                    <li>Japonés: ${pais.translations.ja}</li>
                </ul>
                <p>Border: ${
                    pais.borders.map((border) => {
                        return `
                        <p>${border}</p>
                        `
                    }
            ) }</p>
                <p>

                </p>
            </div>
            ` 
        })
    })
}

// 3. EVENTOS
buscarPaises()

```

