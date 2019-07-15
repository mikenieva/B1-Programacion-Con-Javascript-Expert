##### RETO-01
## CREA UNA CLASE CHOCOLATE 

### OBJETIVO
Aprender a desarrollar clases para instanciamiento de múltiples objetos. 

### DESARROLLO
1. Crea una clase "Chocolate" que contenga como propiedades en su constructor:
  - Marca
  - Color
  - Sabor
  - Tamaño
  - Porcentaje de Cacao
  - Temperatura
  - Gramaje
  
2. Agrega 3 métodos en la clase.
  - calcularGramaje(). Retorne el gramaje, multiplicado por 50.
  - estado(temperatura). Retorne, de acuerdo a cierta temperatura, cómo se comporta el chocolate.
  - vendeRapido(temporada). Retorne, de acuerdo a la temporada, cómo se vende el chocolate.


```javascript
class Chocolate{
constructor(marca, color, sabor, tamano, porcentajeDeCacao, temperatura, gramaje){
  this.marca = marca;
  this.color = color;
  this.sabor = sabor;
  this.tamano = tamano;
  this.porcentajeDeCacao = porcentajeDeCacao;
  this.temperatura = temperatura
  this.gramaje = gramaje
}
calculargramaje(){
  return `
  ${this.gramaje * 50 * this.gramaje} gramos
  `

}
estado(temperatura){
  console.log(temperatura)
  console.log(this.temperatura)
  if(this.temperatura==="caliente"){
    return "derretido"
  }
  else{
    if(this.temperatura==="frio")
    return "congelado"
  }
}
vendeRapido(temporada){
  if(temporada ==="invierno"){
     return "se vende mucho"
  }
  else{
    return "se vende poco"
  }
}
}

const Turin = new Chocolate("Turin", "cafe", "amargo", "Dos tabletas", "Cien Por Ciento", "frio", 75)
console.log(Turin)
console.log(Turin.estado("super frio"))
console.log(Turin.calculargramaje())
console.log(Turin.vendeRapido("verano"))

const Hersheys = new Chocolate("Hersheys", "blanco", "dulce", "Una tableta", "Veinte Por Ciento", "caliente")
console.log(Hersheys)
console.log(Hersheys.estado())

```
