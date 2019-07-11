# Sesión 1: Fundamentos de Programación | Módulo JS

La gran bienvenida a Javascript. Uno de los lenguajes de programación más usados en el mundo.

Conocerás su trayectoria y aprenderás a utilizar sus bases (variables, condicionales, ciclos y funciones) para comenzar a crear aplicaciones.

***

## Tabla de Contenido
  
  - **[¿Por qué Javascript?](#por-que-javascript)**
    
  - **[¿Cómo comenzar y qué hacer?](#como-comenzar-y-que-hacer)**
  
  - **[¿Qué es Javascript?](#que-es-javascript)**  

  - **[Tu primer archivo Javascript](#tu-primer-archivo-javascript)**
  
  - **[¿Qué son las variables?](#que-son-las-variables)**
  
  - **[Tipos de Datos](#tipos-de-datos)**
    - [Ejemplo 1: Tipos de Datos](#ejemplo-1-tipos-de-datos)
    - [Reto 1: Crea tus variables](#reto-1-crea-tus-variables)    
    
  - **[Operadores Básicos](#operadores-basicos)**
    - [Ejemplo 2: Operadores Básicos](#ejemplo-2-operadores-basicos)    
       
  - **[Condicionales](#condicionales)**
    - [Ejemplo 3: Condicionales](#ejemplo-3-condicionales)
    - [Reto 2: Piedra, papel o tijeras](#reto-2-piedra-papel-o-tijeras)
  
  - **[Ciclos - for](#ciclos-for)**
    - [Ejemplo 4: Ciclos](#ejemplo-4-ciclos)
    - [Reto 3: Par o impar](#reto-3-par-o-impar)
    
  - **[Funciones](#funciones)**
    - [Ejemplo 5: Funciones](#ejemplo-5-funciones)
    - [Reto 4: Par o impar con funciones](#reto-4-par-o-impar-con-funciones)
    
***

## ¿Por qué Javascript?

Te damos la gran bienvenida a Javascript.

Javascript hoy es uno de los lenguajes de programación más usados en el mundo.

En la última encuesta de 2019, realizada a la plataforma [Stack Overflow](https://stackoverflow.com/), foro más importante de desarrolladores en el mundo, se comprobó que Javascript es y seguirá teniendo mucha tracción en los siguientes años. 

**No es el único que seguirá creciendo**, claro está, pero el impacto de este se ha mantenido y progresa anualmente.

> Te recomendamos leer la investigación completa [sobre el ecosistema tecnológico aquí](https://insights.stackoverflow.com/survey/2019).

![](https://i.imgur.com/ZZmILsS.png)

***

Atentos de estas tendencias, muchas empresas confían sus productos digitales a Javascript, parcial o totalmente, en diferentes áreas de desarrollo. 

Notemos que es posible, con Javascript, trabajar aplicaciones móviles y escritorio.

![tendencias](https://i.imgur.com/nlzlvO0.png)

***

Ahora, el conjunto de tecnologías que necesitarás para construir aplicaciones web puede ser este (importante destacar que no es el único pero es de los más robustos):

![](https://i.imgur.com/UgG62hG.png)

Observa que:

- Del lado del cliente tenemos React, un framework **basado en Javascript** que te permite organizar, mantener y gestionar una aplicación basado en un concepto llamado componentes.  

> Destacar que React cuenta con un soporte sólido por parte de la comunidad de desarrolladores y también de Facebook, como compañía. De ahí su seguridad y confianza.

- En el lado del servidor tenemos Node.js, el cual es un ambiente de desarrollo que permite el uso de Javascript del lado del servidor. Este te permitirá conectar con el cliente y con la base de datos, siendo un escudo de seguridad para ambas partes.

- Finalmente, encontramos MongoDB, una base de datos no relacional, el cual es muy amigable y al trabajar con él para su manejo, verás que se parecerá mucho al lenguaje de Javascript.

## ¿Cómo comenzar y qué hacer?

Para poder utilizar todas las tecnologías mencionadas y crear aplicaciones robustas, deberás formar buenas bases en Javascript.

A pesar de que es un lenguaje el cual podrás aplicar en poco tiempo, practicar es la clave. 

Te compartimos consejos para mantenerte enfocado y persistente:

- Al inicio, probablemente muchos conceptos no tengan mucho sentido o implique mucho trabajo comprenderlos. **Es normal.** Sólo es cuestión de ejercitar lógica con muchos ejercicios y retos, los cuales la gran mayoría te los iremos compartiendo a lo largo del módulo.

- No tengas miedo en pedir ayuda o asumir que no sabes. Las personas que se dedican o implican tecnología en sus carreras profesionales saben que para crecer más rápido deben de aceptar que no lo saben todo. **Acercarse a otras personas alrededor cuando hay obstáculos hará más fácil tu progreso.**

- Encuentra espacios de estudio. Programar puede parecer diferente a otra área profesional debido a que necesitas momentos donde debes compartir, debatir y hablar sobre tus conclusiones técnicas, pero también te servirá mucho encontrar lugares, tiempos, momentos, donde puedas concentrarte, enfocarte y teclear mucho.

- Se vale Googlear. Probablemente llegues a estancarte y pasar una o dos horas en algunas líneas de código. Ten la confianza de ir a Google y buscar la respuesta. Encontrarás muchos desarrolladores que han pasado por ese mismo momento y han compartido cómo lo resolvieron. **Buscar ayuda en Internet es normal.** 

> Cabe aclarar, "copiar y pegar" código **no es una buena práctica**. Es importante que todo el código que tú coloques en tu proyecto lo entiendas. Sepas por qué está ahí. Esto hará que tu aplicación pueda seguir creciendo y sigas teniendo, junto con tu equipo, el control del mismo.

Ahora si, comencemos.

***

## ¿Qué es Javascript?

Javascript (JS) es:

1. Un lenguaje de programación que permite ejecutarse principalmente en cada navegador (Google Chrome, Safari, Firefox, Opera, etc.).

2. Multiplataforma. Puede ser utilizado en muchas plataformas y sistemas. Podemos usarlo fuera del navegador a través de ciertos programas adicionales.

3. Multiparadigma. Se puede manejar orientación a objetos, funcional, reactivo. Más adelante explicaremos como se utilizan y para qué nos sirven.

4. **Diferente a JAVA. Son diferentes lenguajes. Javascript no es JAVA**

5. Un jugador que hace equipo, en el navegador, a lado de HTML y CSS, para que el usuario pueda usar la aplicación.

   1. HTML maneja el contenido, la estructura, el esqueleto, el "markup".
   2. CSS maneja la presentación, el diseño, la visualización de la aplicación.
   3. JS maneja la interactividad, efectos, dinamismo y más adelante, la gestión de datos y el flujo de los mismos a otras áreas de la aplicación.

![Variables](https://i.imgur.com/yNwZN3I.png)

***

## Tu primer archivo Javascript

- En tu computadora, crearás una carpeta llamada `bedu-sesion1`. Aquí colocaremos todos nuestros ejercicios siguientes.

- Abrirás tu editor (nos basaremos en este caso con Visual Studio Code) y darás click en "Open Folder" en la parte posterior de la ventana. Buscarás la carpeta, la seleccionarás y la abrirás.

## ¿Qué son las variables?

Las variables se utilizan para almacenar información dentro de tu programa para ser manipulados.

En el modo más general, te ayudan a **etiquetar datos**. Los llamaremos en el momento que los necesitemos a lo largo del programa.

![Variables](https://i.imgur.com/toMeYM2.png)

Las variables se dividen en 4 partes:

```javascript
var deporte = "Atletismo"
```

- **Declaración (`var`)**. Cuando comienzas una variable, debes de utilizar la palabra `var`
- **Nombre (etiqueta)**. Irá del lado izquierdo. Será cómo llamarás la variable más adelante.
- **Asignación (`=`)**. A diferencia de la aritmética donde se le conoce como "igual", en Javascript se le conoce como asignación, el cual asignará el valor de lo que el área de su lado derecho genere hacia el lado izquierdo (Nombre).
- **Valor (Tipo de dato)**. Puede ser un texto, un número, un conjunto de datos (objetos, arreglos).
 
***

Ahora bien, nombrar tus variables implica que deberán ser lo más descriptivas posibles. 

Es decir, que si otras personas leyeran tu código, entenderían rápidamente que significa cada dato porque el nombre de su variable lo explica todo. (Fig 1.1)

**`Fig. 1.1`**
```javascript
var saludo = "Hola Mundo";
var perro = "Firulais";
var pais = "México";
var edad = 35;
```
Si tú lees el nombre de las variables anteriores, rápidamente comprendes de qué tratan. 

Si generas una variable que implica dos palabras, te recomendamos usar una técnica llamada **"Camel Case"**. (Fig 1.2) 

Observemos un ejemplo:

**`Fig. 1.2`**

```javascript
var paisLatinoamericano = "México";
var animalVerde = "Rana";
var impuestosAnuales = 250000; 
```

**"Camel Case"** implica:

- Conectar ambas palabras sin espacio, volviéndola una.
- La palabra comenzará con minúscula.
- La segunda palabra empezará con mayúscula. 

Con esto claro, hablemos de los **tipos de datos**.

***

## Tipos de Datos

Para los valores de las variables, podemos utilizar diferentes formatos para expresar de mejor forma nuestro

### Ejemplo 1: Tipos de Datos:

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

***

### Reto 1: Crea tus variables

Es tu turno. 

- Crea un archivo reto1.js
 
- Escribe una variable para cada tipo de dato, al tema que quieras.

***

## Operadores Básicos

Con respecto al tipo de datos `Number` puedes ejecutar operaciones para cambiar su valor.

| Operador | Descripción                       | Ejemplo Javascript    | Observaciones                                     |
|----------|-----------------------------------|-----------------------|---------------------------------------------------|
| +        | Adición                           | var resultado = 4 + 3 |                                                   |
| -        | Substracción                      | var resultado = 4 - 3 |                                                   |
| *        | Multiplicación                    | var resultado = 4 * 3 |                                                   |
| /        | División                          | var resultado = 4 /3  |                                                   |
| %        | "Modulus"<br>Residuo de la división | var resultado = 5 % 2 | "resultado" devolvería 1                          |
| ++       | Incremento                        | var resultado = 4++   | "resultado" devolvería 5, <br> después de su ejecución |
| --       | Decremento                        | var resultado = 4--   | "resultado" devolvería 3, <br> después de su ejecución |

### Ejemplo 2: Operadores Básicos
 
- Abramos un archivo nuevo `ex2.js`

- Hagamos un ejemplo de cada operador.

```javascript

var adicion = 4 + 3;
var resta = 4 - 3;
var multiplicacion = 4 * 3;
var division = 4 / 3;
var resultado = 5 % 2;

var incremento = 4;
incremento++;

var decremento = 4;
decremento--;

```

> Vale la pena aclarar sobre la separación de cada línea en Javascript con punto y coma `;`. Javascript no requiere estrictamente usar puntos y comas al final de cada línea, sin embargo vale la pena colocarlos. Ahora, en algún punto, cuando alcances un mejor nivel, podrías considerarlos opcional mientras cumplas con ciertos criterios. [Te compartimos un artículo que habla sobre este tema.](https://flaviocopes.com/javascript-automatic-semicolon-insertion/). 

***

## Condicionales

- Controlan el comportamiento y flujo de un programa.

- `if` es el tipo de condicional más común y corre sólo si la condición encerrada entre parentesis es verdadera (“truthy”)

- Traducida literalmente del inglés, se la podría llamar la estructura "si...si no", es decir, "si se cumple la condición, haz esto, y sino, haz esto otro"

La sintaxis está armada de esta forma:

```javascript

if (10 > 5) {
    console.log("Soy un mensaje que sí va a aparecer")    
}

```

- `if`. Primer elemento que indica que realizarás un condicional.
- `()`. Dentro de los paréntesis colocarás dos elementos que compararás y verificarás su condición. Si cumplen con la condición, se le considerará que es `true` (verdadero) y ejecutará lo que esté en las llaves. En caso contrario, se denominará `false` (falso) e ignorará todo el código que se encuentre dentro de las llaves.  

Para realizar las operaciones de comparación utilizamos sus operadores:

| Operador | Descripción                                                                                                   | Ejemplos                                                      |
|----------|---------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| ==       | **Igualdad.** Devuelve `true` si ambos operandos son iguales                                                      | 3 == 3<br> 3 == "3"<br> "mike" == "mike"<br> var1 == true<br> |
| !=       | **Desigualdad.** Devuelve `true` si ambos operandos no son iguales                                                | 3 != 4                                                        |
| ===      | **Estrictamente iguales.**<br> Devuelve `true` si los operandos son igual<br> y tienen el mismo tipo.             | 3 === 3 <br><br> 3 === "3"<br> (Devuelve falso)               |
| !==      | **Estrictamente desiguales.** <br> Devuelve `true` si los operandos no son iguales<br> y/o no son del mismo tipo. | 3 !== "3"                                                     |
| >        | **"Mayor que".** Devuelve `true` si el operando de la izquierda<br> es mayor que el operando de la derecha.       | 4 > 3                                                         |
| >=       | **Mayor o igual que.**                                                                                            | 4 >= 4                                                        |
| <        | **"Menor que".** Devuelve true si el operando de la izquierda<br>  es menor que el operando de la derecha.        | 12 < 15                                                       |
| <=       | **Menor o igual que.**                                                                                            | 15 <= 15                                                      |
- `{}`. Finalmente, en las llaves, colocaremos nuestras sentencias de ejecución.

### Ejemplo 3: Condicionales

- Hagamos un programa que, dependiendo de la hora, nos salude correctamente.

````javascript
var now = 13

if (now < 12) {
  console.log("Buenos días")
}

if (now >= 12 && now <= 19 ) {
  console.log("Buenas tardes")
}

if (now > 19) {
  console.log("Buenas noches")
}
````
Ahora bien, en lugar de estar colocando únicamente `if`, podemos concatenar las condicionales con `else if`.

````javascript
var now = 13

if(now < 12){
  console.log("Buenos días")
} else if(now >= 12 && now <= 19 ){
  console.log("Buenas tardes")
} else if(now > 19){
  console.log("Buenas noches")
} else {
    console.log("No entiendo que hora es")
}
````
Observa al final que utilizamos `else`, el cual ejecuta cualquier otra opción que no haya cumplido con las anteriores. 

***

### Reto 2: Piedra, papel o tijeras

- Crea un archivo nuevo, `reto2.js`

- Crea un programa que simule un juego de piedra, papel o tijeras, utilizando condicionales.

***

## Ciclos - for

- Ahora bien, los ciclos (bucles) ofrecen una manera rápida y sencilla de hacer algo repetidamente.

- Un ciclo `for` se repite hasta que la condición especificada se evalúa como `false`.

- Nos permiten repetir la ejecución de un código múltiples veces.

La sintaxis funciona de esta manera:

```javascript
for(var i = 0; i<=50; i++){
    // CÓDIGO A EJECUTAR EN CADA CICLO
}
```

- `for`. La sintaxis para el inicio del ciclo. Posteriormente, abrimos paréntesis y dentro habrán 3 valores.  
- `Inicializador`. El primer valor en el cual declaras la variable, incluyendo con cuál número inicia el ciclo.
- `Condición`. El segundo valor es la condición, lo que tiene que pasar para terminar la iteración.
- `Incrementable`. El tercer valor es el incrementable. Cada vez que termina todas las sentencias de ejecución, la variable aumenta en 1. Esto se debe al operando `++`. 


### Ejemplo 4: Ciclos

Pensemos que queremos repetir una palabra 5 veces y que aparezca en consola:

```javascript
console.log("hola");
console.log("hola");
console.log("hola");
console.log("hola");
console.log("hola");
```

Excelente, funcionará y se reflejarán en la consola. 

Ahora bien, si te dijera que queremos repetirlo 200 veces, entonces copiar y pegar cada línea se volvería ineficiente (aparte de odiar al que te dio la instrucción).

¿Qué podemos hacer?

```javascript
for(var i = 0; i<=200; i++){
    console.log("hola")
}
```

Con esto, obtendremos de retorno los 200 "hola".

### Reto 3: Par o impar

- Crea un ciclo que cuente del 0 al 100. Usa un `console.log`.
- Si el número que está tocando en ese momento es par, que lo mencione en el `console.log` también. 

***

## Funciones

- Son conjunto de sentencias que realizan una tarea o calculan un valor.

- Tienen dos momentos: **declaración** e **invocación**.

- Pueden ser invocadas las veces que se necesiten. Dentro del mismo archivo o en externos.


### Ejemplo 5: Funciones

Crearemos una función que permita congelar alimentos.

````javascript
// DECLARACIÓN
function congelar(alimento){
    console.log("Congelando" + " " + alimento)
}

// INVOCACIÓN

congelar("pollo")
congelar("carne")
congelar("helado")
````

### Reto 4: Par o impar con funciones

- Ahora, combinemos los ciclos y funciones.
 
- Genera un ciclo del 0 al 100, que se invoque a través de una función. 


### Postwork
 
- Si no terminaste con la actividad final (el ejercicio de BEDU Travels) que se realizó durante la sesión 1, termínala. 

- Aplicar los conceptos vistos en esta sesión a tu proyecto personal, por lo que a continuación se enumeran las posibles actividades a realizar, según apliquen a tu proyecto.
  -  Generar la estrategia de “requerimientos” del proyecto personal.
  -  Crear el primer archivo de Javascript.
  - Trazar y planear las funciones que van a necesitar, nombrándolas correctamente.
  - Integrar en una primera iteración ciclos, condicionales y variables para generar las funcionalidades iniciales. 
  - Empujar a Github cambios y empezar a nombrar correctamente cada uno de ellos.