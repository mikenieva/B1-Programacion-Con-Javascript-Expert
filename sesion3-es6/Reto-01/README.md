##### Reto 01
## ES6

### OBJETIVO

Practicar la nueva forma de generación de variables y funciones, utilizando ES6.

### DESARROLLO
1. Crea 4 variables.
2. Crea un ciclo.
3. Crea 3 funciones
4. Crea un texto utilizando "template strings" y aplica una variable dentro con `${}`

```javascript
const hola = "hola mundo"
const pi = 3.1416
const porcentajeImpuestosAnuales = 16
const nombre = "Mike"

for(let i=0; i<=10; i++){
    console.log(i)
}

const saludo = () => "hola mundo";
const calcularSuma = (a,b) => a + b;
const cocinar = () => "Cocinando...";

const empleados = 10;
const nomina = `Hay ${empleados} en la nómina`

const calcularResta = (a=0, b=0) => {
    const resultado = a - b
    return `El resultado es ${resultado}`
}
```

