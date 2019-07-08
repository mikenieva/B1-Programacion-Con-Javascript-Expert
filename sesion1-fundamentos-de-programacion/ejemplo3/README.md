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
