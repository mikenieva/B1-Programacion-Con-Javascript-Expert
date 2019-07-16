##### Reto 01
## ES6

### OBJETIVO
1. Utilizar ES6 para resolver los siguientes problemas

### DESARROLLO
 
1. Frutas. Inserta las frutas a totalFrutas utilizando "Spread Operator"

```javascript
const frutas = ["platano", "manzana", "mango"]
const totalFrutas = ["pera", "durazno"]

const helados = ["vainilla", "chocolate"]
const totalHelados = ["fresa", "menta", "chocomenta"]
```


### RESPUESTA
```javascript

const totalFrutas = [...frutas, "pera", "durazno"]
const totalHelados = [...totalHelados, "fresa", "menta", "chocomenta"]
```


2. Destructura el siguiente objeto.

```javascript
var whatsapp = {
    createdBy: "Brian Acton",
    founded: 2009,
    writtenIn: "Erlang"    
  };

  var createdBy = whatsapp.createdBy;
  var founded = whatsapp.founded;
  var writtenIn = whatsapp.writtenIn;
```
  
### RESPUESTA 
```javascript
  const whatsapp = {
    createdBy: "Brian Acton",
    founded: 2009,
    writtenIn: "Erlang"    
  };
  const { createdBy, founded, writtenIn } = whatsapp;

```
