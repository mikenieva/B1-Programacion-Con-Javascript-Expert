##### Ejemplo 3
## Template Strings

### OBJETIVO

### DESARROLLO
1. En lugar de generar textos con comillas `"` y concatenar las variables, ahora podremos utilizar una versión simplificada. Utilizaremos una comilla inclinada ` ` ` y dentro colocaremos nuestro texto plano. Cuando necesitemos usar variables, funciones o algún tipo de ejecución Javascript, podemos hacerlo utilizando la sintaxis `${}`. Dentro de las llaves irían todas las sentencias.

```javascript
const nombre = 'Mike'
const mensaje = 
`Hola, mi nombre es ${nombre}`
```

```javascript
const titulo = '<h1>Hola mundo</h1>'
const mensaje = `${titulo}`
```

```javascript
const suma = `${3*3} es el resultado de 3 * 3`
```
