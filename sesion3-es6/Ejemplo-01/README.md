##### Ejemplo 1
## let / const - Declaración

### OBJETIVO

Entender cómo utilizar el lenguaje bajo los nuevos estándares de Javascript.

### DESARROLLO
1. Comienza a cambiar los `var` por `let` y `const`. Observa la propiedad de inmutabilidad que tiene `const` al ser una constante y `let` es mutable. 

Considerar el tema de que `var` es considerado `function scope` y `let` y `const` son `block scope`.

```javascript
let a = 10;
a = 20
console.log(a)    // 20
```

```javascript
const b = 10
b = 20    // Error
```

2. Obsserva cómo, en los objetos, puedes cambiar el valor de un `key`, incluso aunque sea constante. Misma situación en arreglos.

```javascript
const auto = {
  color: “rojo”
}
auto.color = “azul” // Éxito
auto = 4 // Error
```

```javascript
const nombres = [“mike”, “salvador”]
nombres[0] = “andres” // Éxito
```

