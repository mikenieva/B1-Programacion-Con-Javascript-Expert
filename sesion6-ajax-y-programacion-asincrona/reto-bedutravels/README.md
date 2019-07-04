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
