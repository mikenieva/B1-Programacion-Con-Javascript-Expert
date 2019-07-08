### Ejemplo 1: Tipos de Datos

- Escribiremos todos los tipos de variables relacionados con el tema "alimentos". 

- Abre un archivo dentro de nuestra carpeta creada llamado `ex1.js`

- Utilizaremos `//` para indicar que es una línea de comentario. (Fig. 1.3)

**`Fig 1.3`**

```javascript

// STRING - Texto plano
var fruta = "manzana";
var fraseDesayuno = "Hoy comeré 3 manzanas";

// NUMBER - Número
var edad = 29;
var diasExpiracionManzana = 7;

// BOOLEAN (Booleano) - Valor vinculado al "verdadero" o "falso"
var esComestible = true;
var esRoja = false;

// UNDEFINED - Valor que tiene una variable a la cual no se le ha asignado ningún valor (aún)
var fechaDesayuno
// ó...
var fechaDesayuno = undefined;

// NULL - La variable no tiene ningún valor. Puede referirse a un "no aplica".
var cascaraManzana = null;

// ARREGLO - Conjunto de datos. Cada lugar en el arreglo puede ser otro tipo de dato.
var desayuno = ["Leche", "Manzana"];
var invitados = ["Mike", "Andrés", "Salvador"];

// OBJETO - Conjunto de datos, el cual contiene se estructuran en un formato llave:valor 

var frutas = {
    nombre: "manzana",
    color: "roja",
    esComestible: true   
}

```

> Al inicio, puedes colocar tus variables en español para que practiques, pero en buena práctica usualmente colocamos las variables en idioma inglés. **Esto hace que el idioma no sea una barrera**, en caso de que otros desarrolladores trabajen tu proyecto, incluyendo los caracteres especiales (como los acentos o las ñ).

- Abramos el navegador, click derecho para abrir `Inspect` y el área `console` para que revisemos cada tipo de dato. Escribe el nombre de tu variable para observar qué retorna. 

![](https://i.imgur.com/ezQIe3f.png)
