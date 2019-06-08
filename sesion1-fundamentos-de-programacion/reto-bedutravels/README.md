# Tabla de Contenido

  - [Preámbulo](#pre%C3%A1mbulo)
  - [Objetivos](#objetivos)
  - [ALCANCE 0: Gestión del proyecto](#alcance-0-gesti%C3%B3n-del-proyecto)
  - [ALCANCE 1: Diseña el arreglo de objetos "tours"](#alcance-1-dise%C3%B1a-el-arreglo-de-objetos-tours)
  - [ALCANCE 2. Crea una variable de usuario en `index.js`](#alcance-2-crea-una-variable-de-usuario-en-indexjs)
  - [ALCANCE 3. Crea una función "buscarToursPorPais"](#alcance-3-crea-una-funci%C3%B3n-buscarToursPorPais)
  - [ALCANCE 4. Indica el nombre del usuario y cuántos tours tiene Colombia (COL)](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)

## Preámbulo

Nuestro equipo empieza a conseguir los primeros tours para nuestra plataforma.

Por ello, desde el área de desarrollo, iniciaremos la funcionalidad sobre la búsqueda de tours.

## Objetivos

Crearemos un programa que busque tours dentro de un arreglo de objetos.

## ALCANCE 0: Gestión del proyecto

Dentro de nuestro **GitHub Project**, moveremos nuestra historia de usuario:

"Como cliente quiero buscar un destino para agendar un viaje".

Dentro, creamos un issue que vincularemos con un "commit".

## ALCANCE 1: Diseña el arreglo de objetos "tours"

- Crea un archivo llamado `tours.js`

- Crea una constante `tours` y asígnale un arreglo de objetos que cumpla con las siguientes propiedades:

```javascript
id: Number
titulo: String
operador: String
tipoDeTour: String
visitas: Array
acomodacionIncluida: Boolean,
transporteIncluido: Boolean,
edadMinimaRequerida: Number,
requisitos: Object
    - depositoUSD: Number,
    - seguroDeViaje: Boolean
duracionTour: Number,
opiniones: null,
calificacion: null,
precioUSD: null,
fechasDisponibles: Object,
    - "[Año específico]": Object
        - "[Fecha específica]": Object
            - asientosDisponibles: Number,
            - asientosReservados: Number
```

Colocamos a continuación el primer tour con el primer país para que puedas guiarte.

Deberás crear tres países (MEX, GUA, COL). Cada país tendrá una propiedad "paquetes" que incluirá 3. cada uno deberá incluir 3 `fechasDisponibles`.

```javascript
var tours = [
    {
        MEX: {
            paquetes: [
                {// Tour 001
                    id: 001,
                    titulo: "México Desconectado",
                    operador: "Viajeros x el mundo",
                    tipoDeTour: "Tour en Grupo",
                    visitas: ["Puebla", "Ciudad de México, Chiapas"],
                    acomodacionIncluida: true,
                    transporteIncluido: true,
                    edadMinimaRequerida: 21,
                    requisitos: {
                        depositoUSD: 400,
                        seguroDeViaje: true
                    },
                    duracionTour: 15,
                    opiniones: null,
                    calificacion: null,
                    precioUSD: 1181,
                    fechasDisponibles: {
                        2019: {
                            "001-30Marzo": {
                                asientosDisponibles: 15,
                                asientosReservados: 4
                            },
                            "002-02Abril": {
                                asientosDisponibles: 15,
                                asientosReservados: 6
                            },
                            "003-25Abril": {
                                asientosDisponibles: 15,
                                asientosReservados: 1
                            }
                        }
                    }
                },
                ...
            ]
        }
    },
    {
        COL:...
    },
    {
        GUA:...
    }
]
```

- Al final de tu archivo, recuerda exportarlo con `module.exports` para abrir su disponibilidad a otros archivos javascript.

## ALCANCE 2. Crea una variable de usuario en `index.js`

- Crea un archivo llamado `index.js`

- Importa `tours.js` al inicio con `require`

- Crea una variable `var` con un objeto que incluya los datos de un usuario con las siguientes propiedades:

```javascript
var usuario = {
  nick: "mikenieva",
  nombre: "Miguel",
  apellido: "Nieva"
};
```

## ALCANCE 3. Crea una función "buscarToursPorPais"

- Crea una función en una constante llamada `buscarToursPorPais`.

  - Parámetros:

    - `toursArray`. Un arreglo de objetos que contenga países con sus tours, (básicamente será tu archivo `tours.js`).
    - `paisString`. Un `string` que incluya la clave del país.

  - Retorno:
    - Un arreglo de objetos con los tours de ese país en específico.

```javascript
var buscarToursPorPais = (toursArray, paisString) => {
  // Dado los dos datos recibidos, busques en toursArray y retornes un arreglo de objetos con los tours de ese país en específico.
};

buscarToursPorPais(tours, "MEX");
//=>   [{...tour1},{...tour2},{...tour3}]
```

## ALCANCE 4. Indica el nombre del usuario y cuántos tours tiene Colombia (COL)

Para cerrar el ejercicio, realiza un `console.log()` donde generes un `string` el cual indique el nombre del usuario y cuántos tours tiene Colombia, aprovechando tu función anterior.

```shell
console.log(`USUARIO encontró X tours en Colombia `)
```
