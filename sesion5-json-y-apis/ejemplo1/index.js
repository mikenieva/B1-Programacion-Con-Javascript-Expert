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
