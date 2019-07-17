
##### Ejemplo 02
## Calculadora bajo MVC y patrón de módulos

### OBJETIVO

Desarrollar una aplicación utilizando Webpack, Babel, Nodejs y división por módulos.

### DESARROLLO

1. Crea la base general para empezar un proyecto con Nodejs, visto en el ejemplo anterior.
2. Desarrolla dentro de la carpeta `src` una más llamada `js`. Y dentro colocarás otras dos, llamadas `models` y `views`.

Te quedará de esta forma:

```javascript

|-src
   |-js
      |-models
        |-index.js
      |-views
        |-index.js
   |-index.js
```

3. Ahora bien, en los modelos (models) podrás gestionar las funciones que estén relacionadas con la gestión y manipulación de datos. Es por ello que dentro colocaremos un archivo llamado `Sum.js` y contendrá las funciones de la suma.

```javascript
const Sum = (a,b) => {
    return a + b
}

export default Sum
```

4. Luego, en las vistas (views) podrás gestionar las funciones relacionadas con la maquetación y textos (markup). Es decir, estará vinculada con nuestro archivo HTML a través del DOM. Crearemos un archivo llamado `sumView.js`

```javascript
// 1. CONSTANTES

const resultArea = document.querySelector("#resultado")

// B. CONSTANTES - EXPORTACIONES

export const getInputNumA = document.querySelector("#numA")
export const getInputNumB = document.querySelector("#numB")

// 2. FUNCIONES - CONSTANTES

// 2. FUNCIONES - EXPORTACIONES

export const parseInputs = (input) => {
    return parseInt(input.value)
}

export const clearArea = (area) => {
    return resultArea.innerHTML = ""
}

export const renderSumView = (result) => {
    const markup = `
        <span>
            ${result}
        </span>
    `

    resultArea.insertAdjacentHTML('beforeend', markup)
}
```

5. Finalmente, en el `index.js` que se encuentra en la raiz de la carpeta `/src`, irán nuestros controladores. Aquí enlazaremos las vistas con los modelos, ejecutándose a través de eventos.

```javascript
// IMPORTACIONES
import Sum from './models/Sum'

import * as sumView from './views/sumView'

document.querySelector("#sumar").addEventListener(("click"), () => {
    event.preventDefault()
    
    sumView.clearArea()

    const numA = sumView.parseInputs(sumView.getInputNumA)
    const numB = sumView.parseInputs(sumView.getInputNumB)
    
    const resultado = Sum(numA, numB)

    return sumView.renderSumView(resultado)
})

```

6. Tomar en cuenta que nuestro `index.html` debe contener un mínimo de base para que podamos enlazar correctamente el app.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <section>
        <form>
            <input id="numA" />
            <input id="numB" />
            <button id="sumar" type="submit">Sumar</button>
            <button id="restar" type="submit">Restar</button>
        </form>
        <p>Resultado:</p>
        <span id="resultado"></span>
    </section>
    
</body>
</html> 

```

