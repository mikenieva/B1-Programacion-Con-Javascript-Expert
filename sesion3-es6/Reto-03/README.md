##### Reto 03
## ES6

### OBJETIVO
Utiliza todos los aditamentos de ES6 que puedas.

### DESARROLLO
 
Trabajas en una universidad y estás encargado de la administración del mismo.

Hasta ahora, cuentas con:

* 3 edificios (Administración, Ingenierías, Idiomas)
* 4 áreas deportivas (Futbol, Baloncesto, Tenis, Atletismo)
* 2 áreas verdes (Jardín Central, Jardín Trasero)

Sus gastos de mantenimiento mensual son:
* Cada edificio 5,000 USD.
* Cada área deportiva 7,000 USD.
* Cada área verde 3,000 USD.

Cada año, se te pide que generes un reporte que incluya los siguientes datos:

* El gasto anual por edificio, indicando también su nombre y año de construcción.
* El gasto anual por área deportiva, indicando también su nombre y año de construcción.
* El gasto anual por área verde, indicando su nombre.

Todo el reporte deberá ser impreso y redactado a través de la consola.

Utiliza todos los aditamentos de ES6 que puedas.



### RESPUESTA

```javascript

const edificios = [
    {
        nombre: "Administración",
        gasto: 5000,
        construccion: 2009
    },
    {
        nombre: "Ingenierías",
        gasto: 5000,
        construccion: 2009
    },
    {
        nombre: "Idiomas",
        gasto: 5000,
        construccion: 2010
    }
]

const areasDeportivas = [
    {
        nombre: "Futbol",
        gasto: 7000,
        construccion: 2011
        
    },
    {
        nombre: "Baloncesto",
        gasto: 7000,
        construccion: 2011
    },
    {
        nombre: "Tenis",
        gasto: 7000,
        construccion: 2012
    }
]

const areasVerdes = [
    {
        nombre: "Jardín Central",
        gasto: 3000
    },
    {
        nombre: "Jardín Trasero",
        gasto: 3000
    }
]


const calcularGastoAnual = (arreglo) => {
    
    let suma = 0
    
    arreglo.map(e => {
        return suma += e.gasto 
    })

    return suma * 12
}


const edificiosTotal = calcularGastoAnual(edificios)
const areasDeportivasTotal = calcularGastoAnual(areasDeportivas)
const areasVerdesTotal = calcularGastoAnual(areasVerdes)

const gastoAnual = edificiosTotal + areasDeportivasTotal + areasVerdesTotal

console.log(`El área de edificios gasta anualmente $${edificiosTotal}`)
console.log(`El área deportiva gasta anualmente $${areasDeportivasTotal}`)
console.log(`Las áreas verdes gastan anualmente $${areasVerdesTotal}`)
```

