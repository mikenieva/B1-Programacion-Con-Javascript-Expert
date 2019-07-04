# BEDU Travels | Javascript

## Tabla de Contenido

- [Preambulo](#preámbulo)

- Sesión 1: Fundamentos de Programación
  
  - [Objetivos](#objetivos)
  - [ALCANCE 0: Haz un "fork" del repositorio](#haz-un-"fork"-del-repositorio)
  - [ALCANCE 1: Diseñemos el arreglo de objetos "tours" ](#alcance-1-dise%C3%B1a-el-arreglo-de-objetos-tours)
  - [ALCANCE 2. División del archivo `tours.js`](#alcance-2-crea-una-variable-de-usuario-en-indexjs)
  - [ALCANCE 3. Crea una función "searchTours"](#alcance-3-crea-una-funci%C3%B3n-buscarToursPorPais)
  - [ALCANCE 4. Probemos nuestra función "searchTours"](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  
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
