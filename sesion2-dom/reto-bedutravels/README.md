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
