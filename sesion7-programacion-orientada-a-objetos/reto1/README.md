##### RETO-01
## CREA UNA CLASE CHOCOLATE 

### OBJETIVO
Aprender a desarrollar clases para instanciamiento de múltiples objetos. 

### DESARROLLO
1. 

```javascript
class Juguete{
  constructor(nombre, precio, marca){
    this.nombre = nombre
    this.precio = precio
    this.marca = marca
  }

  aumentarPrecio(temporada){
    if(temporada === "invierno"){
      // Aumentar al precio 40%
      return `
          El juguete en ${temporada} es de:
          ${(this.precio * .4) + this.precio}
      `
    } else{
      // El precio baja en 5%
        return `
          El juguete tiene descuento y es de:
          ${this.precio - (this.precio * .05)}
        `
    }
  }
}

const nintendoSwitch = new Juguete("Nintendo Switch", 6500, "Nintendo")

console.log(nintendoSwitch)
console.log(nintendoSwitch.aumentarPrecio("verano"))

```
