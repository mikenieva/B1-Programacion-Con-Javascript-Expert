##### EJEMPLO-01
## CREA UNA CLASE 

### OBJETIVO
Aprender a desarrollar clases para instanciamiento de múltiples objetos. 

### DESARROLLO
1. 

```javascript
class Persona {
    constructor(edad, traje, zapatosColor){
      this.edad = edad;
      this.traje = traje;
      this. zapatosColor = zapatosColor 
    }
         
    hablar(idioma){
      return `Sé hablar ${idioma}`;
  }
}

const mike = new Persona(23, "rojo", "negros", "65kg")
console.log(mike.hablar("inglés"))

```
