# Sesión 1: Fundamentos de Programación | Módulo JS

La gran bienvenida a Javascript. Uno de los lenguajes de programación más usados en el mundo.

Conocerás su trayectoria y aprenderás a utilizar sus bases (variables, condicionales, ciclos y funciones) para comenzar a crear aplicaciones.

***

## Tabla de Contenido
  
  - **[¿Por qué Javascript? ¿Qué son las variables?](#)**
    - Ejercicio 1
    - Reto 1
    
  - **[Condicionales](#)**
    - Ejercicio 2
    - Reto 2
    
  - **[Ciclos](#)**
    - Ejercicio 3
    - Reto 3
    
  - **[Funciones](#)**
    - Ejercicio 4
    - Reto 4
    
  - **[BEDU Travels: Sesión 1](#)**
  
  - **[PREWORK - Siguiente sesión](#prework)**
  
  - **[Postwork](#postwork)**
  
***

## 1. ¿Por qué Javascript?

Te damos la gran bienvenida a Javascript.

Javascript hoy es uno de los lenguajes de programación más usados en el mundo.

En la última encuesta de 2019, realizada a la plataforma [Stack Overflow](https://stackoverflow.com/), foro más importante de desarrolladores en el mundo, se comprobó que Javascript es y seguirá teniendo mucha tracción en los siguientes años. 

**No es el único que seguirá creciendo**, claro está, pero el impacto de este se ha mantenido y progresa anualmente.

> Te recomendamos leer la investigación completa [sobre el ecosistema tecnológico aquí](https://insights.stackoverflow.com/survey/2019).

![](https://i.imgur.com/ZZmILsS.png)

***

Atentos de estas tendencias, muchas empresas confían sus productos digitales a Javascript, parcial o totalmente, en diferentes áreas de desarrollo. 

Notemos que es posible, con Javascript, desarrollar también aplicaciones móviles y escritorio.

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

## ¿Que es Javascript?

Javascript (JS) es:

1. Un lenguaje de programación que permite ejecutarse en cada navegador (Google Chrome, Safari, Firefox, Opera, etc.).

2. Multiplataforma. Puede ser utilizado en muchas plataformas y sistemas.

3. Multiparadigma. Se puede manejar orientación a objetos, funcional, reactivo. Más adelante explicaremos como se utilizan.

4. **Diferente a JAVA. Son diferentes lenguajes. Javascript no es JAVA**

5. Un jugador que trabaja, desde el navegador, a lado de HTML y CSS para el manejo de la experiencia hacia el usuario.

   1. HTML maneja el contenido, la estructura, el esqueleto, el "markup".
   2. CSS maneja la presentación, el diseño, la visualización de la aplicación.
   3. JS maneja la interactividad, efectos, dinamismo y más adelante, la gestión de datos y el flujo de los mismos a otras áreas de la aplicación.

![](https://i.imgur.com/VD6w1tB.png)

***

## ¿Qué son las variables?

Las variables se utilizan para almacenar información dentro de tu programa.

En el modo más general, te ayudan a etiquetar datos y así llamarlos en el momento que tú quieras a lo largo de la aplicación.

Las variables se dividen en 4 partes:

```javascript
var deporte = "Atletismo"
```

- Declaración (`var`). Cuando comienzas una variable, debes de utilizar la palabra `var`
- Nombre (etiqueta). Irá del lado izquierdo. Será cómo llamarás la variable más adelante.
- Asignación (`=`). A diferencia de la aritmética donde se le conoce como "igual", en Javascript se le conoce como asignación, el cual asignará el valor de lo que el área de su lado derecho genere hacia el lado izquierdo (Nombre).
- Valor (Tipo de dato). Puede ser un texto, un número, un conjunto de datos (objetos, arreglos).

Al final, lo que te permitirá esto es referenciar valores con etiquetas.
 
***

Ahora bien, nombrar tus variables implica que deberán ser lo más descriptivas posibles. 

Es decir, que si otras personas leyeran tu código, entenderían rápidamente que significa cada dato porque el nombre de su variable lo explica todo. (Fig 1.1)

`Fig. 1.1`
```javascript
var saludo = "Hola Mundo"
var perro = "Firulais"
var pais = "México"
var edad = 35 
```
Si tú lees el nombre de las variables anteriores, rápidamente comprendes de qué tratan.

Como buena práctica, vale la pena que si generas una variable que implica dos palabras, utilices una técnica llamada "Camel Case", la cual te dice que coloques



```javascript

```
Crearemos primero un archivo Javascript.



Escribiremos todos los tipos de variables relacionados con el tema "alimentos".




### Reto 1: Crea tus variables



 

