##### Reto 01
## AJAX y Programación Asíncrona

### OBJETIVO

* Conectarse a una API y expresar diferentes datos a través de asincronismo.

### DESARROLLO

1. Entra a REST Countries (https://restcountries.eu/rest/v2/all) y observa el JSON con todos los países. Lo que seguirá es extraer los datos para el programa. Utiliza Nodejs.

Puedes utilizar `request` para Callbacks. Y la librería `axios` para promesas y async-await.

```javascript
const request   = require('request')
const axios     = require('axios')
```

#### Callback
2. Crea una función que retorne, a través de Callbacks, un objeto que incluya de cada país:
   a. name
   b. capital
   c. population
   d. flag

```javascript
const countriesCallbacks = () => {
    request.get('https://restcountries.eu/rest/v2/all', (error, response, body) => {
        return body.data.map(country => {
            return {
                name: country.name,
                capital: country.capital,
                population: country.population,
                flat: country.flag,
            }
        })
    })
}
```
#### Promesas
3. Crea una función que retorne, a través de Promesas, un objeto que incluya de cada país:
 a. name
 b. capital
 c. population
 d. flag
```javascript


const countriesPromises = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
        const countryList = response.data.map(country => {
            return {
                name: country.name,
                capital: country.capital,
                population: country.population,
                flat: country.flag,
            }
        })
    })
}

countriesPromises()

```
#### Async - Await
4. Crea una función que retorne, a través de async-await, un objeto que incluya de cada país:
 a. name
 b. capital
 c. population
 d. flag
```javascript

const countriesAsyncAwait = async () => {

    const response = await axios.get('https://restcountries.eu/rest/v2/all')

    return response.data.map(country => {
        return {
            name: country.name,
            capital: country.capital,
            population: country.population,
            flat: country.flag,
        }
    })
}

countriesAsyncAwait()
```

