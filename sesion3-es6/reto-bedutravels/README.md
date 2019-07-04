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
