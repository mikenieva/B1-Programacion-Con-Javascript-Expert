# BEDU Travels | Javascript

## Tabla de Contenido

- [Preambulo](#preámbulo)

- Sesión 1: Fundamentos de Programación
  
  - [Objetivos](#objetivos)
  - [ALCANCE 1: Planeación de la aplicación ](#alcance-1-dise%C3%B1a-el-arreglo-de-objetos-tours)
  - [ALCANCE 2. Diseñemos el arreglo de objetos "tours"`](#alcance-2-crea-una-variable-de-usuario-en-indexjs)
  - [ALCANCE 3. Generemos una función "searchTours"](#alcance-3-crea-una-funci%C3%B3n-buscarToursPorPais)
  - [ALCANCE 4. Probemos nuestra función "searchTours"](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)

- Sesión 2: DOM
  - [ALCANCE 5: Ciclos con Git y GitHub](#alcance-0-gesti%C3%B3n-del-proyecto)
  - [ALCANCE 6: Integremos HTML con Javascript](#alcance-1-dise%C3%B1a-el-arreglo-de-objetos-tours)
  - [ALCANCE 7. Crea la barra de búsqueda con su botón](#alcance-2-crea-una-variable-de-usuario-en-indexjs)
  - [ALCANCE 8. Integra la función searchTours con la barra de búsqueda](#alcance-3-crea-una-funci%C3%B3n-buscarToursPorPais)

- Sesión 3: ES6

  - [ALCANCE 9. Convierte todo tu código anterior a ES6](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 10. Exportación e importación](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 11. Modelo, Vista, Controlador](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 12. Expresa los países encontrados en HTML](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)

- Sesión 4: NodeJS y Arquitectura
  - [ALCANCE 13. Instalemos Node.js](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 14. Configuremos Webpack y Babel](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 15. Javascript compilando con Webpack](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 16. Integremos archivos y funciones previas](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  
- Sesión 5: JSON y APIs
  - [ALCANCE 17. Creando archivos JSON](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)  
  - [ALCANCE 18. Consumo de JSON](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 19. "State" y renderización de resultados](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 20. Guardando nuestros datos en "state"](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)

- Sesión 6: Asincronía
  - [ALCANCE 21. Async y Await en el área de búsqueda](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 22. Async y Await en el área de Tours](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 23. Expresa los países encontrados en HTML](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 24. Expresa los países encontrados en HTML](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  
- Sesión 7: Programación Orientada a Objetos
  - [ALCANCE 25. Diseñando la clase "Tour"](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 26. Diseñando la clase "Search"](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 27. Combinando nuestros modelos con las vistas](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 28. Diseñando el controlador](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  
- Sesión 8: Programación Funcional
  - [ALCANCE 29. Utilizando .find para encontrar tours](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 30. Utilizando .map para renderizar conjuntos de datos](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 31. Subiendo el proyecto a GitHub](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)



***

## Preámbulo

![Imgur](https://i.imgur.com/tHDS1of.jpg)

Nuestra empresa se llama BEDU Travels.

Habiendo tenido tanto éxito en nuestras franquicias de agencias de viajes, hemos recibido una ronda de capital para comenzar nuestra expansión.

Entre los retos, está la construcción de nuestra plataforma online, la cual queda a cargo de nosotros, el equipo de desarrollo. 

Tenemos trazado el camino hacia el primer producto mínimo viable, por lo que ya podemos empezar a desarrollar.

Mientras tanto, el área de ventas empieza a armar los primeros tours para que se suban a nuestra plataforma, así como un listado de datos que deben también reflejarse.

Con esto claro, comenzamos con el producto.

![Proyecto Final](https://i.imgur.com/oW7btoZ.png)

# Sesión 1: Fundamentos de Programación

## Consideraciones técnicas

Te pedimos que instales los siguientes programas:

- [Visual Studio Code](https://code.visualstudio.com/). Es de los mejores editores, pero puedes usar otro si así lo deseas.
- [Git](https://git-scm.com/downloads). Para controlar las versiones y subir nuestros cambios a GitHub.
- [GitHub](https://github.com.com/). Crea tu cuenta en caso de que no lo hayas hecho.

## **Objetivos**

Crearemos nuestro primer script. Incluirá una función que retorne tours, a partir de la creación de un objeto.

## ALCANCE 0: Haz un "fork" del repositorio

- Primero, le darás click al botón de "Fork" dentro de este repositorio.

- Posteriormente, bajarás el proyecto a tu computadora. Para hacerlo, abre tu terminal y ejecuta los siguientes comandos. 

> Recuerda sustituir "TU-USUARIO-DE-GITHUB" por tu respectivo usuario de GitHub.

```shell  
git clone https://github.com/[TU-USUARIO-DE-GITHUB]/bedutravels-js.git
```

ó

```shell   
mkdir bedutravels

cd bedutravels

git init

git remote add origin https://github.com/[TU-USUARIO-DE-GITHUB]/bedutravels-js.git

git pull origin master
```

- Verás un archivo, que será un `README.md` y un archivo `.gitignore`

## ALCANCE 1: Diseñemos el arreglo de objetos "tours"

- Dentro del proyecto, crearás dos archivos:
  - `index.html`
  - `index.js`

- Dentro de `index.html` crearás tus etiquetas básicas (html, head, body). Puedes escribir `html:5` si estás usando Visual Studio Code para que te la genere automáticamente.

- Recuerda vincular el archivo de Javascript a través de la etiqueta `<script>`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BEDU Travels: Encuentra tu siguiente destino</title>
</head>
<body>


<script src="./index.js"></script>
</body>
</html>
```

- En `index.js`, crea una variable llamada `toursMEX` y asígnale un arreglo de objetos que cumpla con las siguientes propiedades:

```javascript
id: Number
slug: String,
nombreTour: String
operador: String
tipoDeTour: String
descripcion: String
img: String
pais: String
zonaLlegada: String,
zonaSalida: String,
escalas: Array
acomodacionIncluida: Boolean,
transporteIncluido: Boolean,
edadMinima: Number,
requisitos: Object
    - seguroDeViaje: Boolean
duracionTour: Number,
opiniones: null,
calificacion: null,
precioUSD: Number,
fechasDisponibles: Object,
  - "2019": Array of Objects        
    - id: String,
    - fechaInicio: String,
    - fechaFin: String
    - asientosDisponibles: Number,
    - asientosReservados: Number,
    - precioRealUSD: Number
```

Colocamos a continuación el primer tour para que puedas guiarte. Recuerda crear 3 tours con 3 `fechas disponibles`.

```javascript
var toursMEX = [
    {
      "id": "001",
      "slug": "mexico",
      "nombreTour": "Chiapas Hermoso",
      "operador": "Viajeros x el mundo",
      "tipoDeTour": "Tour en Grupo",
      "descripcion": "Vive la naturaleza y disfruta de la aventura en la selva de Chiapas.",
      "img": "https://i.imgur.com/dp6ZqwA.jpg",
      "pais": "México",
      "zonaLlegada": "Chiapas",
      "zonaSalida": "Ciudad de México",
      "escalas": ["Ciudad de México", "Chiapas"],
      "acomodacionIncluida": true,
      "transporteIncluido": true,
      "edadMinima": 21,
      "requisitos": {
        "seguroDeViaje": true
        },
      "duracionTour": 15,
      "opiniones": null,
      "calificacion": null,
      "precioUSD": 1181,
      "fechasDisponibles": {
        "2019": [
          {
            "id": "2019-chiapas-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-chiapas-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-chiapas-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    }
  }
  ...
```

- Ahora crea una variable `toursCOL` para Colombia y `toursPER` para Perú. Recuerda agregarles sus 3 tours respectivamente.

Puedes [entrar aquí](https://github.com/mikenieva/bedutravels-js/blob/finished/dist/data/mexico.json) para ver un resultado final. Es muy seguro que difieran los datos, pero si en estructura coincide perfecto.


## ALCANCE 2. División del archivo `tours.js`

Dividiremos el archivo en tres secciones:

a. Constantes
b. Funciones (Declaraciones)
c. Eventos (Invocaciones)

```javascript

// 1. CONSTANTES

var toursMEX  =   {...}
var toursCOL  =   {...}
var toursPER  =   {...}


// 2. FUNCIONES (DECLARACIONES)


// 3. FUNCIONES (INVOCACIONES)

```

A continuación, escribiremos nuestra primera función.


## ALCANCE 3. Crea una función "searchTours"

- Crea una función en una constante llamada `searchTours`.

El objetivo de la función es **retornar** los tours de un país, los cuales se encuentran en la propiedad de "fechasDisponibles".

El parámetro que deberá contener es:

> `toursArray`. Un arreglo de objetos que contenga países con sus tours, (básicamente una de tus constantes).

El retorno deberá ser:

> Un arreglo de objetos con los tours de ese país en específico.

```javascript
const searchTours = (toursArray) => {
  // Aquí va tu código
};
```
- La función deberá ser colocada en la sección 2 de nuestra arquitectura.

- Una vez realizada, compárala con la que tenemos para ti a continuación:

```javascript
const searchTours = (toursArray) => {
  // Aquí va tu código
};
```

## ALCANCE 4. Probemos nuestra función "searchTours"

- Ya que la construiste, invócala en la sección 3 de nuestro archivo.

```javascript
searchTours(toursMEX);
//=>   [{...tour1},{...tour2},{...tour3}]
```

Para cerrar el ejercicio, realiza un `console.log()` donde generes un `string` el cual indique el nombre del usuario y cuántos tours tiene México, aprovechando tu función anterior.

```shell
console.log(`Hay X tours`)
```

# Sesión 2: DOM

## Objetivos

Crearemos una página web que contenga una barra de búsqueda, utilizando nuestra función `searchTours` creada anteriormente.

## ALCANCE 5: Arquitectura de carpetas I

- Crea una carpeta llamada "js".
  
- Inserta tu archivo `index.js` dentro de la carpeta "js".
  
```javascript

|-js
   |-index.js
|-index.html
|-README.txt
|-.gitignore

```

- Crea un archivo llamado index.html en la raiz del proyecto. Este será el archivo HTML donde se ejecutarán nuestros archivos Javascript.

## ALCANCE 6: Integremos HTML con Javascript

 Vamos a regresar a nuestro HTML y vamos a empezar a conectar funciones con etiquetas.

- Vamos a generar una etiqueta `<header></header>` y lateralmente, dos etiquetas `<div></div>`

```HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BEDU Travels: Encuentra tu siguiente destino</title>
  </head>
  <body>
    <header></header>
    <div></div>
    <div></div>
    <script src="./index.js"></script>
  </body>
</html>
```


## ALCANCE 7: Crea la barra de búsqueda con su botón

- Nos colocaremos en `<header></header>`. Luego, insertaremos una etiqueta `<form></form>`.
  
- Dentro de `<form>`, inserta una etiqueta `<input/>`

- Inmediatamente, `<button>Buscar</button>`.
 
```html
...

  <header>
    <form>
      <input type="text" />
      <button>Buscar</button>
    </form>
  </header>

...
```

- Introduce un `class` como atributo para el `<form>`, para que podamos identificarlo dentro del archivo de Javascript. El valor sería: `search`.


```html

  <form class="search">

```

- Asimismo, le pondrás un `class` para el `input`. 

```html

<input type="text" class="search__field">

```


- Crea una carpeta CSS y dentro, un archivo `index.css`. Posteriormente, inserta los siguientes estilos. Puedes verlos [aquí](https://github.com/mikenieva/bedutravels-js/blob/finished/dist/css/style.css). 

La estructura de carpetas y archivos quedaría de la siguiente manera:

```javascript

|-css
|  |-index.css
|-js
|  |-index.js
|-index.html
|-README.txt
|-.gitignore

```


Recuerda vincular dentro de tu `index.html` la etiqueta `<link>` con tu hoja de estilos.


```html
<link href="./css/index.css" rel="stylesheet" />
```

## ALCANCE 8: Prueba tu barra de búsqueda

 - Como último paso, conecta la función `searchTours` con el input que ya tenemos creado.

Entra a tu `index.js` y agrega, en el área de "Constantes" los siguientes valores.

```javascript

// 1. CONSTANTES

var searchForm  =     document.querySelector('.search')
var searchInput =     document.querySelector('.search__field')
var searchRes   =     document.querySelector('.results')
var searchReslist =   document.querySelector('.results__list') 
var searchResPages =  document.querySelector('.results__pages')
var tour           =  document.querySelector('.tour')

var state = {}

```

- Ahora, agregaremos un par de funciones. Observa cada comentario donde se explica que hace cada sentencia:

```javascript

...

// 2. FUNCIONES

function controlSearch(){
    // 1. Obtener la búsqueda de la vista
  var query = searchInput.value

  if (query) {
    alert(query)
  }
};

// 3. EVENTOS

searchForm.addEventListener("submit", function(){
  event.preventDefault()
  controlSearch()
})

```

Si todo sucede correctamente, cuando coloques algo en el área de búsqueda, deberá alertarte un mensaje con la palabra que estás buscando.

# Sesión 3: ES6

## ALCANCE 9: Convierte todo tu código anterior a ES6

En esta sesión, convertiremos todo nuestro código a ES6. 

Primero, iremos a nuestro archivo `index.js` y convertiremos cada línea. Observa cómo integramos los "arrow functions".

```javascript

// 2. FUNCIONES



const searchTours = (toursArray) => {
    // Tu código
  };

const controlSearch = () => {
    // 1. Obtener la búsqueda de la vista
  const query = searchInput.value
    
  if (query) {
    alert(query)
  }
};

// 3. EVENTOS

searchForm.addEventListener("submit", () => {
  controlSearch()
})

```


## ALCANCE 10: Arquitectura II. Exportación e importación

- Lo que haremos ahora será crear nuevas carpetas y crear nuevos archivos, que quedarán de esta manera.

```javascript

|- src
|  |-js
|  |   |---models
|  |   |   |-Search.js
|  |   |   |-Tour.js
|  |   |
|  |   |---views
|  |   |   |-searchView.js
|  |   |   |-tourView.js
|  |   |   |-base.js
|  |   |
|  |   |-index.js
|  |   |-config.js
|  |
|  |-css
|  | |-index.css
| 
|-index.html

```

**Observaciones**

- Todos los archivos, excepto `index.html` irán sobre una carpeta llamada `src`.
  
- Observa que nuestro archivo `index.js` lo colocaremos dentro de la carpeta js.

- Aparecen dos nuevas carpetas (models y views).

- Tenemos nuestra carpeta `css` con su respectivo `index.css`

Asimismo, observa que generamos una carpeta llamada "models"


## ALCANCE 11: Modelo, Vista, Controlador

Voy a explicarte un concepto llamado "Modelo", "Vista, "Controlador".

Cada modelo contendrá una clase, el cuál tendrá su constructor y diversos métodos.

Cada vez que necesitemos crear un objeto, utilizaremos estas clases.

La vista se refiere a las funciones que renderizan código dinámico, incluyendo HTML y Javascript. Serán "pedazos de código dinámico" que aparecerán en nuestro `ìndex.html`.

Finalmente, el controlador. Este se encargará de ejecutar cada módulo, extrayendo del modelo y vista las funciones respectivas.

A este patrón se le conoce como MVC (Modelo-Vista-Controlador) y es muy popular en las aplicaciones.

- Bien. Ahora, cambiaremos/moveremos nuestro código a las diferentes áreas de la aplicación.

- Primero, necesitaremos trabajar un archivo llamado `base.js` el cual contendrá todas nuestras asignaciones (variables) para hacer comunicación vía DOM.

**`./js/views/base.js`**

```javascript
export const elements = {
    searchForm:     document.querySelector('.search'),
    searchInput:    document.querySelector('.search__field'),
    searchRes:      document.querySelector('.results'),
    searchReslist:  document.querySelector('.results__list'),
    searchResPages: document.querySelector('.results__pages'),
    tour:         document.querySelector('.tour')
}

export const elementStrings = {
    loader: 'loader'
}

export const renderLoader = parent => {
    const loader = `
        <div class=${elementStrings.loader}>
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `

    parent.insertAdjacentHTML('afterbegin', loader)
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`)
    if(loader) loader.parentElement.removeChild(loader)
}

```

- Observa las diferentes funciones que colocaremos en el modelo "Search":


**`./js/models/Search.js`**

```javascript

// 1. IMPORTACIONES

import axios from 'axios'
import { key } from '../config'

// 2. CLASE

export default class Search {
    
    // A. CONSTRUCTOR
    constructor(query){
        this.query = query
    }

    // B. MÉTODOS
    async getResults(){
        const pais = this.query.toLowerCase()
        try{
            const res = await axios(`./data/${pais}.json`)
            this.result = res.data
        } catch (error){
            console.log("Intenta nuevamente")
        }
    }
}

```

Ahora, realicemos la vista de "search", denominada `searchView.js`

**`./js/views/searchView.js`**

```javascript

// 1. IMPORTACIONES
import { elements } from './base'



const limittourTitle = (title, limit = 25) => {
    const newTitle = []
    if(title.length > limit){
        title.split(' ').reduce((acc, curr) => {
            if(acc + curr.length <= limit){
                newTitle.push(curr)
            }
            return acc + curr.length
        }, 0)
        return `${newTitle.join(' ')} ...`
    } 
    return title
}

const rendertour = tour => {
    const markup = `
        <li>
        <a class="results__link" href="#${tour.slug}-${tour.id}">
            <figure class="results__fig">
                    <img src="${tour.img}" alt="${tour.nombreTour}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limittourTitle(tour.nombreTour)}</h4>
                    <p class="results__author">${tour.pais}</p>
                </div>
            </a>
        </li>        
    `
    elements.searchReslist.insertAdjacentHTML('beforeend', markup)
}

const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page -1 : page +1}>
    <span>Página ${type === "prev" ? page - 1 : page + 1}</span>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${
        type === "prev" ? "left" : "right"
        }"></use>
    </svg>
    </button>
`;

const createMessage = () => `
    <button class="btn-inline-none">
        Todos los tours están mostrados
    </button>
`;


const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage)
    
    let button;
    if(page === 1 && pages > 1) {
        button = createButton(page, 'next')
    } else if(page < pages) {
        button = `
            ${button = createButton(page, 'prev')}
            ${button = createButton(page, 'next')}
        `
    } else if (page === pages && pages > 1){
        button = createButton(page, 'prev')
    } else {
        button = createMessage()
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button)

}

export const renderResults = (tours, page = 1, resPerPage = 5) => {
    const start = (page - 1) * resPerPage
    const end = page * resPerPage

    tours.slice(start, end).forEach(rendertour)

    renderButtons(page, tours.length, resPerPage)
}

export const getInput = () => elements.searchInput.value

export const clearInput = () => {
    elements.searchInput.value = ''
}

export const clearResults = () => {
    elements.searchReslist.innerHTML = '';
    elements.searchResPages.innerHTML = '';
}

```

Con esto, tenemos nuestro modelo y vista de la búsqueda terminada.

- Es momento de conectar todo a través de nuestro `index.js`. Este será el controlador de nuestro proyecto. 

Haremos cambios al mismo:


```javascript

// 1. IMPORTACIONES

import Search from "./models/Search";
import Tour from "./models/Tour";
import * as searchView from "./views/searchView";
import * as tourView from "./views/tourView";
import { elements, renderLoader, clearLoader } from "./views/base";


// 2. STATE (Estado)
const state = {};

// 3. CONTROLADORES

// A1. SEARCH (DECLARACIONES)
const controlSearch = async () => {
  // 1. Obtener la búsqueda de la vista
  const query = searchView.getInput()

  if (query) {
    // 2) Si existe un dato válido, creamos un nuevo objeto "search" y lo agregamos al "state"
    state.search = new Search(query);

    // 3) Preparamos la interfaz para los resultados
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
        // 4) Buscamos los tours
        await state.search.getResults();

        // 5) Renderizamos los resultados en la interfaz
        clearLoader();
        searchView.renderResults(state.search.result);
    } catch(err){
        alert(err)
        clearLoader();
    }  
  }
};

// A2. SEARCH (INVOCACIONES)

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

// B1. TOUR (DECLARACIONES)

const controltour = async () => {
  // Get ID from url
  const hashless = window.location.hash.replace("#", "");

  const id =  hashless.match(/\d+/g)[0]
  const country =   hashless.match(/[a-zA-Z]+/g)[0]
  
  if (id) {
    // Preparamos interfaz para cambios
    tourView.cleartour()
    renderLoader(elements.tour)

    // Creamos nuevo objeto tour
    state.tour = new Tour(id);
    
    try {
      // Obtenemos la data del tour
        await state.tour.getTour(country);

      // Calculamos cuántas personas utilizarán el tour
        state.tour.calcServings();

      // Renderizamos el tour
        clearLoader();
        tourView.rendertour(state.tour)

    } catch (err) {
        alert(err);
        }
    }
};

// B2. TOUR (INVOCACIONES)

// Cuando haya un cambio
["hashchange", "load"].forEach(event =>
  window.addEventListener(event, controltour)
);

// Manejamos los cambios de cuántas personas estarán en el tour
elements.tour.addEventListener('click', e => {
  if(e.target.matches('.btn-decrease, .btn-decrease *')){
    // Acción para decrementar
    if(state.tour.servings > 1){
        state.tour.updateServings('dec')
        tourView.updateServingsIngredients(state.tour)
    }
  } else if(e.target.matches('.btn-increase, .btn-increase *')){
    // Acción para incrementar
    state.tour.updateServings('inc')
    tourView.updateServingsIngredients(state.tour)
  }
})


```

Observa los diferentes comentarios entre cada función y trata de explicarlos.

# Sesión 4: NodeJS & Arquitectura

## ALCANCE 13: Instalamos Node.js

- Tendrás que ir a la página de (NodeJS)[https://nodejs.org] y descargar el programa. Dependiendo de tu sistema operativo, se te indicará cuál es tu mejor recomendación.

De preferencia, elige el LTS (Long-Term Support) que significa una versión de Node que estará soportado y mantenido a largo plazo por la comunidad.

![NodeJS Installation](https://i.imgur.com/opSa7md.png)

Abrirás tu terminal y a través del siguiente comando confirmarás que ya lo tienes incorporado.

```shell
npm --version
```

Si el retorno es un número, significa que ya está listo tu sistema.


- Entraremos a la terminal y escribiremos:

```shell
npm init -y
```

Esto te construirá un archivo llamado `package.json`, el cual le reemplazarás este conjunto de configuraciones:

```javascript

{
  "name": "bedutravels-js",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --mode development --open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.4.5",
    "@babel/preset-env": "^7.4.5",
    "babel-loader": "^8.0.6",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.35.0",
    "webpack-cli": "^3.3.5",
    "webpack-dev-server": "^3.7.2"
  },
  "dependencies": {
    "@babel/polyfill": "^7.4.4",
    "axios": "^0.19.0"
  }
}

```

Después de esto, ejecutarás en tu terminalo, ubicando en la carpeta del proyecto:

```javascript

npm install

```


## ALCANCE 14: Configuremos Webpack y Babel

- Vas a crear un archivo llamado `webpack.config.js` y otro llamado `.babelrc`

- Creamos una carpeta al nivel raiz, llamada `dist`. En esta carpeta, Webpack compilará todo el proyecto que se encuentra en `src` y lo simplificará.

```javascript

|- dist
|- src
|  |- js
|  |   |- models
|  |   |   |- Search.js
|  |   |   |- Tour.js
|  |   |
|  |   |- views
|  |   |   |- searchView.js
|  |   |   |- tourView.js
|  |   |   |- base.js
|  |   |
|  |   |- index.js
|  |   |- config.js
|  |
|  |- css
|  |  |- index.css
| 
|- index.html
|- package.json
|- .gitignore
|- .babelrc
|- webpack.config.js

```
Dentro de este archivo, crearemos las siguientes sentencias:

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['@babel/polyfill','./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
```

Lo que estamos indicando con esto es trazar las instrucciones para compilar todo tu código de la carpeta `src` a la carpeta `dist`.

Ahora, en el archivo `.babelrc`:

```javascript

{
    "presets": [
        ["@babel/env", {
            "targets": {
                "browsers": [
                    "last 5 versions",
                    "ie >= 8"
                ]
            }
        }]
    ]
}

```

Este archivo lo que hace es apoyarte en que nosotros escribamos en las últimas versiones de Javascript y lo convierta en versiones anteriores para que pueda correr en cualquier navegador.

## ALCANCE 15: Javascript compilando con Webpack

- Teniendo todo esto, lo que sigue es correr el siguiente comando para que compile el proyecto y lo minifique dentro de la carpeta de `dist`.

```javascript

npm run build

```

Con esto, en esta carpeta, estará todo el proyecto compilado. Si tú abres el archivo `index.html` desde `dist`, funcionará sin problemas.


## ALCANCE 16: Integremos archivos y funciones previas

Ahora bien, ya que tenemos el flujo de archivos funcionando, nuestro último comando será correr el comando:

```javascript

npm run start

```

Este comando levanta un servidor y corre el proyecto en modo "desarrollo". 

Eso significa que puedes hacer cambios directamente en la carpeta `src` y se hará la actualización automáticamente.


# Sesión 5: JSON y APIs

## ALCANCE 17: Creando archivos JSON

- Crearemos un archivo `mexico.json` el cual agregaremos nuestro objeto `toursMEX` que se encontraban ubicados en el archivo de `index.js`.

```javascript

|- dist
|  |- ...
|  |- mexico.json
|
|- src
|  |- js
|  |   |- models
|  |   |   |- Search.js
|  |   |   |- Tour.js
|  |   |
|  |   |- views
|  |   |   |- searchView.js
|  |   |   |- tourView.js
|  |   |   |- base.js
|  |   |
|  |   |- index.js
|  |   |- config.js
|  |
|  |- css
|  |  |- index.css
| 
|- index.html
|- package.json
|- .gitignore
|- .babelrc
|- webpack.config.js

```

Recordar que, al ser un JSON, la forma de escribirlo es muy diferente a un objeto normal.

Cada propiedad es necesario que tenga comillas para que pueda funcionar.

A continuación te comparto el archivo de `mexico.json` para que lo anexes y lo observes.

Probablemente el que hiciste sea muy similiar. Lo que te toca hacer es adaptarlo o usar este mismo.

```javascript

[
  {
    "id": "001",
    "slug": "mexico",
    "nombreTour": "Chiapas Hermoso",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Tour en Grupo",
    "descripcion": "Vive la naturaleza y disfruta de la aventura en la selva de Chiapas.",
    "img": "https://i.imgur.com/dp6ZqwA.jpg",
    "pais": "México",
    "zonaLlegada": "Chiapas",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Chiapas"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null,
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-chiapas-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-chiapas-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-chiapas-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  },
  {
    "id": "002",
    "slug": "mexico",
    "nombreTour": "Guanajuato por siempre",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Tour con acompañante",
    "descripcion": "Enamórate de Guanajuato. Atrévete a conocer las callejoneadas y la música de esta hermosa ciudad.",
    "img": "https://i.imgur.com/CJ2kd4g.jpg",
    "pais": "México",
    "zonaLlegada": "Guanajuato",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Guanajuato"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null,
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-guanajuato-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-guanajuato-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-guanajuato-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  },
  {
    "id": "003",
    "slug": "mexico",
    "nombreTour": "Yucatán y naturaleza",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Tour en Grupo",
    "descripcion": "Impresiónate por sus costas llenas de cultura maya y grandes templos.",
    "img": "https://i.imgur.com/tW6kq1x.jpg",
    "pais": "México",
    "zonaLlegada": "Yucatán",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Yucatán"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null,
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-yucatan-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-yucatan-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-yucatan-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  },
  {
    "id": "004",
    "slug": "mexico",
    "nombreTour": "Puebla",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Tour en Grupo",
    "descripcion": "Maravíllate con el esplendor de los elegantes edificios coloniales de Puebla, disfruta del delicioso sabor del Mole y el chile en nogada.",
    "img": "https://i.imgur.com/JqdQact.jpg",
    "pais": "México",
    "zonaLlegada": "Puebla",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Puebla"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null,
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-puebla-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-puebla-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-puebla-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  },
  {
    "id": "005",
    "slug": "mexico",
    "nombreTour": "Puerto Vallarta",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Tour en Grupo",
    "descripcion": "Popular destino multicultural con playas, historia y variada gastronomía.",
    "img": "https://i.imgur.com/BmG6afo.jpg",
    "pais": "México",
    "zonaLlegada": "Puerto Vallarta",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Puerto Vallarta"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null,
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-puertovallarta-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-puertovallarta-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-puertovallarta-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  },
  {
    "id": "006",
    "slug": "mexico",
    "nombreTour": "Veracruz",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Visita los lugares turísticos de Veracruz y disfrute del carnaval y del calor jarocho. ",
    "descripcion": "Lindo viaje a Chiapas",
    "img": "https://i.imgur.com/oxCJVyG.jpg",
    "pais": "México",
    "zonaLlegada": "Veracruz",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Veracruz"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null,
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-cancun-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-cancun-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-cancun-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  },
  {
    "id": "007",
    "slug": "mexico",
    "nombreTour": "Cancún",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Tour en Grupo",
    "descripcion": "Cancún se encuentra ubicada en Quintana Roo, México, y las claras aguas del Caribe la rodean. Lo caracterizan playas, cuya arena de coral es fina y blanca.",
    "img": "https://i.imgur.com/IEI3AyX.jpg",
    "pais": "México",
    "zonaLlegada": "Cancún",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Cancún"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null, 
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-cancun-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-cancun-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-cancun-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  }
]



```

Observarás 7 tours. Cada tour está referenciado con sus propiedades y valores.

También haz notar que comienza como un arreglo de objetos, porque esto hace posible que puedas utilizar métodos como .map para recorrerlo y posteriormente renderizarlo en el HTML.


## ALCANCE 18: Consumo de archivos JSON

Para que podamos consumir el archivo JSON en nuestro proyecto, es necesario indicar en qué parte sucede.

Si observas tu archivo `Search.js`, encontrarás diferentes líneas que ejercerán llamadas asíncronas hacia al archivo para extraer los datos.

También notarás que la manera en cómo elaboramos la búsqueda parte de la construcción de una clase (objeto).

```javascript

// Importamos la librería de AXIOS, que te permite utilizar un "fetch" de datos directo a la URL que tú pidas
import axios from 'axios'

import { key } from '../config'

export default class Search {
    constructor(query){
        this.query = query
    }

    async getResults(){
        const pais = this.query.toLowerCase()
        try{
            const res = await axios(`./data/${pais}.json`)
            this.result = res.data
        } catch (error){
            console.log("Intenta nuevamente")
        }
    }
}

```


## ALCANCE 19: "State" y renderización de resultados

- En tu `index.js` encontrarás una línea que se llama `state`

```javascript


import Search from "./models/Search";
import Tour from "./models/Tour";
import * as searchView from "./views/searchView";
...

const state = {};

const controlSearch = async () => {
  const query = searchView.getInput()

  if (query) {
    state.search = new Search(query);

    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
        await state.search.getResults();
        clearLoader();
        searchView.renderResults(state.search.result);
    } catch(err){
        alert(err)
        clearLoader();
    }  
  }
};

...

```

Observemos cómo está construido y que **sólo si encuentra un query, es decir, una búsqueda,** entonces instanciará el objeto "Search" y lo renderizará en el área correspondiente dentro de tu `index.html`.



## ALCANCE 20: Guardando nuestros datos en "state"

Cada vez que coloquemos un dato en el input y ejecutemos un "submit", lo que sucederá es que habrá un movimiento en el área de eventos de nuestro controlador `index.js`

```javascript

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

```

En este momento, puedes observar que en el primer evento, al darle submit, ejecuta `controlSearch`, el cual es referida a nuestro controlador.

En `controlSearch`, el state se encargará de guardar los datos referidos de la búsqueda que se haya efectuado. En la línea `state.search = new Search(query)` sucede esto.

Lo que nos dice esto es que el resultado lo pongamos en un objeto diferente al que trajimos para que sea fácilmente manipulable.

```javascript

 if (query) {
   // Aquí guardamos la búsqueda realizada en el state.
    state.search = new Search(query);

    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
        await state.search.getResults();
        clearLoader();
        searchView.renderResults(state.search.result);
    } catch(err){
        alert(err)
        clearLoader();
    }  
  }


```


# Sesión 6: Asincronía

## ALCANCE 21: Async y Await en el área de Tours

Ahora bien, para poder realizar el área central de la aplicación, se ejecutarán cambios primero en el modelo de `Tour.js`.

Primero, haremos una importación de `axios`. La aplicación, como podrás notar, termina haciendo dos llamadas a un archivo .json. Una por parte de `Search` y otra por parte de `Tour`.

Luego, ya dentro de la clase, generamos el constructor, el cual recibirá como parámetro un id. Este id se obtendrá más adelante del controlador cuando invoquemos el método `getTour`.

De ahí, de la llamada que suceda en el JSON, empezamos a bajar los datos y anexarlos a que formen parte del objeto. Usamos la palabra `this` para poder incorporarlos.

```javascript
import axios from 'axios'
import { key } from '../config'

export default class Tour {
    constructor(id) {
        this.id = id
    }
    async getTour(country){
        try {
            const res = await axios(`./data/${country}.json`)
            
            const singleTour = res.data.find( e => e.id === this.id);

            this.nombreTour = singleTour.nombreTour
            this.img = singleTour.img
            this.pais = singleTour.pais
            this.zonaSalida = singleTour.zonaSalida
            this.descripcion = singleTour.descripcion
            this.zonaLlegada = singleTour.zonaLlegada
            this.operador = singleTour.operador
            this.tipoDeTour = singleTour.tipoDeTour
            this.escalas = singleTour.escalas
            this.acomodacion = singleTour.acomodacionIncluida
            this.transporte = singleTour.transporteIncluido
            this.edadMinima = singleTour.edadMinima
            this.requisitos = {
                seguroDeViaje: singleTour.requisitos.seguroDeViaje
            };
            this.duracionTour = singleTour.duracionTour
            this.opiniones = singleTour.opiniones
            this.calificacion = singleTour.calificacion
            this.precioUSD = singleTour.precioUSD
            this.fechasDisponibles = singleTour.fechasDisponibles
            this.asientosDisponibles = singleTour.asientosDisponibles
            this.asientosReservados = singleTour.asientosReservados

        } catch(error){
            alert(err)
        }
    }

    calcServings(){
        this.servings = 1
    }

    updateServings (type) {
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;
        this.servings = newServings;
    }
}


```

Al final, tenemos dos métodos. Uno que se llama `calcServings` que crea una propiedad `servings` el cual está relacionada con el número de personas que van a tomar ese tour.

Y `updateServings`, el cual, dependiendo de cuántas personas alla y el botón al que se le de click, aumentará o decrementará su valor.


## ALCANCE 22: Generando los eventos para el área de Tours

Dentro de nuestro controlador, `index.js`, observaremos la parte de los `tours`.


```javascript

const controltour = async () => {

  const hashless = window.location.hash.replace("#", "");

  const id =  hashless.match(/\d+/g)[0]
  const country =   hashless.match(/[a-zA-Z]+/g)[0]
  
  if (id) {
    tourView.cleartour()
    renderLoader(elements.tour)

    state.tour = new Tour(id);
    
    try {
        await state.tour.getTour(country);

        state.tour.calcServings();

        clearLoader();
        tourView.rendertour(state.tour)

    } catch (err) {
        alert(err);
        }
    }
};

["hashchange", "load"].forEach(event =>
  window.addEventListener(event, controltour)
);

elements.tour.addEventListener('click', e => {
  if(e.target.matches('.btn-decrease, .btn-decrease *')){
    if(state.tour.servings > 1){
        state.tour.updateServings('dec')
        tourView.updateServingsresources(state.tour)
    }
  } else if(e.target.matches('.btn-increase, .btn-increase *')){
      state.tour.updateServings('inc')
      tourView.updateServingsresources(state.tour)
  }
})


```

Observa los dos eventos al final del código.

Tenemos un `['hashchange','load']` los cuales son eventos que en el momento que suceden, ejecutan la función `controltour`, el cual está vinculado con el segundo controlador.

La otra función está vinculada con el decremento e incremento de las personas que están disponibles para tomar el tour.


# Sesión 7: Programación Orientada a Objetos

## ALCANCE 25: Creando las vistas de "Tour" y "Search"

- Con todo lo anterior armado, haremos un vínculo con las vistas del `Tour`. Para ello, atacaremos el archivo `tourView.js`, el cual incluye el "markup", la combinación de HTML y datos dinámicos, para renderizarlo en una zona de nuestro HTML.

```javascript

import { elements } from "./base";

export const cleartour = () => {
    elements.tour.innerHTML = "";
};

const createTour = tour => `
        <li class="tour__package">
                <p>
                    <span><b>Inicia: </b></span>${tour.fechaInicio}</p>
                <p>
                    <span><b>Termina: </b></span>${tour.fechaFin}
                </p>
                <p>
                    ${tour.asientosReservados} asientos reservados / ${tour.asientosDisponibles} disponibles 
                </p>
                <p>
                    US $${tour.precioRealUSD} por persona
                </p>
                    
                <button class="btn-small tour__btn tour__btn--add">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                <span>Reservar</span>
            </button>
        </li>
        <hr>
`;

export const rendertour = (tour) => {
    const markup = `
        <figure class="tour__fig">
            <img src="${tour.img}" alt="${tour.title}" class="tour__img">
            <h1 class="tour__title">
                <span>${tour.nombreTour}</span>
            </h1>
        </figure>
        <div class="tour__details">
            <div class="tour__info">
                <span class="tour__info-data tour__info-data--minutes">Desde US $${tour.precioUSD}</span>
            </div>
        </div>

        <div class="tour__details">
            <div class="tour__info" style="text-align: center;">
                <span class="tour__info-data tour__info-data--minutes">
                <p>Salimos desde:</p>
                ${tour.zonaSalida}
                </span>
            </div>
            <div class="tour__info" style="text-align: center;">
            <span class="tour__info-data tour__info-data--minutes">
            <p>Llegamos a:</p>
                ${tour.zonaLlegada}
            </span>
            </div>
        </div>

        <div class="tour__details">
            <div class="tour__info" style="text-align: center;">
                <span class="tour__info-data tour__info-data--minutes">
                    <p>${tour.descripcion}</p>
                    <p>Escalas: ${tour.escalas.map(el => el).join(" > ")}</p>
                </span>
            </div>
        </div>

        <div class="tour__resources">
        <ul class="tour__resource-list">
            <h2>¿Qué incluye?</h2>
            <li class="tour__item" style="">
                <svg class="tour__icon">
                    <use href="img/icons.svg#icon-check"></use>
                </svg>
                <div class="tour__resource">
                        <span class="tour__unit">Acomodación: ${tour.acomodacion  ? "Incluida" : "No incluida"}</span>
                    </div>
                </li>  
                <li class="tour__item">
                    <svg class="tour__icon">
                        <use href="img/icons.svg#icon-check"></use>
                    </svg>
                    <div class="tour__resource">
                        <span class="tour__unit">Transporte: ${tour.transporte ? "Incluido" : "No Incluido"}</span>
                    </div>
                </li>

                <li class="tour__item">
                    <svg class="tour__icon">
                        <use href="img/icons.svg#icon-check"></use>
                    </svg>
                    <div class="tour__resource">
                        <span class="tour__unit">${tour.duracionTour} ${tour.duracionTour === 1 ? "Día" : "Días"} de Viaje</span>
                    </div>
                </li>
        
                <li class="tour__item">
                    <svg class="tour__icon">
                        <use href="img/icons.svg#icon-check"></use>
                    </svg>
                    <div class="tour__resource">
                        <span class="tour__unit">${tour.tipoDeTour}</span>
                    </div>
                </li>
        </ul>
        <ul class="tour__resource-list">
                        <h2>Requisitos</h2>
                        <li class="tour__item">
                        <svg class="tour__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="tour__resource">
                        <span class="tour__unit">Edad Mínima: ${tour.edadMinima}</span>
                    </div>
                </li>
                        <li class="tour__item">
                            <svg class="tour__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="tour__resource">
                                <span class="tour__unit">Seguro de Viaje: ${tour.requisitos.seguroDeViaje ? "Incluido" : "No incluido"}</span>   
                            </div>
                        </li>
                    </ul>
                </div>        


        <div class="tour__directions">
            <h2 class="heading-2">Próximos Tours</h2>
            <div class="tour__info" style="margin-bottom: 3em;">
                <svg class="tour__info-icon">
                    <use href="img/icons.svg#icon-man"></use>
                </svg>
                <span class="tour__info-data tour__info-data--people">${tour.servings}</span>
                <span class="tour__info-text"> personas</span>
                <div class="tour__info-buttons">
                    <button class="btn-tiny btn-decrease">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-minus"></use>
                        </svg>
                    </button>
                    <button class="btn-tiny btn-increase">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-plus"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <ul>
                ${tour.fechasDisponibles["2019"].map(tour => createTour(tour))}
            </ul>
        </div>
    `;
  elements.tour.insertAdjacentHTML("afterbegin", markup);
};

export const updateServingsresources = tour => {

document.querySelector(".tour__info-data--people").textContent =
    tour.servings;

const countElements = Array.from(document.querySelectorAll(".tour__count"));
    countElements.forEach((el, i) => {
        el.textContent = formatCount(tour.resources[i].count);
    });
};

```

- Podrás observar que la principal función es `renderTour`. Dentro del mismo, cuando empiezas a dinamizar los datos, puedes ejecutar más funciones en el caso que necesites iterar (como lo puedes observar en la función de `createTour`).

- Al final, todo se "exporta". Es decir, se deja abierto el archivo para que otros más puedan importar sus funciones y utilizarlas.


## ALCANCE 26: Combinando nuestros modelos con las vistas

Finalmente, dando un repaso de todo lo que armamos, nuestro controlador final debe quedarte de esta manera:

```javascript
// 1. Importaciones

import Search from "./models/Search";
import Tour from "./models/Tour";
import * as searchView from "./views/searchView";
import * as tourView from "./views/tourView";
import { elements, renderLoader, clearLoader } from "./views/base";

const state = {};

const controlSearch = async () => {
  const query = searchView.getInput()

  if (query) {
    state.search = new Search(query);

    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
        await state.search.getResults();
        clearLoader();
        searchView.renderResults(state.search.result);
    } catch(err){
        alert(err)
        clearLoader();
    }  
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});


const controltour = async () => {

  const hashless = window.location.hash.replace("#", "");

  const id =  hashless.match(/\d+/g)[0]
  const country =   hashless.match(/[a-zA-Z]+/g)[0]
  
  if (id) {
    tourView.cleartour()
    renderLoader(elements.tour)

    state.tour = new Tour(id);
    
    try {
        await state.tour.getTour(country);

        state.tour.calcServings();

        clearLoader();
        tourView.rendertour(state.tour)

    } catch (err) {
        alert(err);
        }
    }
};

["hashchange", "load"].forEach(event =>
  window.addEventListener(event, controltour)
);

elements.tour.addEventListener('click', e => {
  if(e.target.matches('.btn-decrease, .btn-decrease *')){
    if(state.tour.servings > 1){
        state.tour.updateServings('dec')
        tourView.updateServingsresources(state.tour)
    }
  } else if(e.target.matches('.btn-increase, .btn-increase *')){
      state.tour.updateServings('inc')
      tourView.updateServingsresources(state.tour)
  }
})

```

# Sesión 8: Programación Funcional

- Regresando al archivo de `Tour.js`, observarás que tienes dentro de la clase, un método llamado `getTour`.


```javascript
async getTour(country){
        try {
            const res = await axios(`./data/${country}.json`)
            
            const singleTour = res.data.find( e => e.id === this.id);

```
La constante aplica un método de arreglo llamado .fin, el cual nos ayuda a encontrar tours, filtrando por país.

Esto significa que podríamos crear más archivos .json (colombia.json, peru.json), los cuales, al tener sus propios datos y al incorporalos a la aplicación, generaría un app más completa.

- Puedes empezar a trabajar en estos dos archivos, con las mismas propiedades de `mexico.json` para realizar las pruebas.

- Finalmente, en el área de `toursView.js` puedes observar que estamos utilizando otro método de arreglo, dentro de `renderTour.js`

```javascript
    <div class="tour__details">
            <div class="tour__info" style="text-align: center;">
                <span class="tour__info-data tour__info-data--minutes">
                    <p>${tour.descripcion}</p>
                    <p>Escalas: ${tour.escalas.map(el => el).join(" > ")}</p>
                </span>
            </div>
        </div>
```

En este caso, se está recorriendo un arreglo y cuando pasa al siguiente elemento, lo que sucede es que se le arregla un caracter ">" para separarlo.


## ALCANCE 31: Subiendo el proyecto a GitHub


Ahora, haz un push a GitHub Pages para tener el proyecto online. Ejecuta la iteración básica de Git.

```shell
git init
git add -A
git commit -m "MENSAJE"
git push origin master

```
