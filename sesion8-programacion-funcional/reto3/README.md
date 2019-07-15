##### RETO-03
## CREA UNA FUNCIÓN QUE FILTRE LOS HELADOS DE COLOR VERDE, UTILIZANDO EL MÉTODO DE ARREGLOS .filter

### OBJETIVO
Aplicar el conocimiento sobre métodos de arreglo para crear funciones utilizando .filter. 

### DESARROLLO
1. Crea un arreglo de objetos de "helados" que contenga como propiedades **sabor** y **color**.

2. Utiliza un método de arreglo con `.filter` que filtre los helados de color verde.

```javascript
const helados = [
    { sabor: 'vainilla', color: 'amarillo' },
    { sabor: 'fresa', color: 'rojo' },
    { sabor: 'chocolate', color: 'café' },
    { sabor: 'mora', color: 'morado' },
    { sabor: 'pera', color: 'verde' },
    { sabor: 'menta', color: 'verde' },
];

const saboresFavoritos = helados.filter(helado => helado.color === 'verde');

console.log(saboresFavoritos);

```
