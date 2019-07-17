##### EJEMPLO-01
## CREA UNA CLASE 

### OBJETIVO
Aprender a desarrollar clases para instanciamiento de múltiples objetos. 

### DESARROLLO
1. Recuerda que para iniciar la clase, escribimos la sintaxis "class".
2. Elegimos el nombre de nuestra clase, en este caso, "Persona". Notar que usualmente las clases empiezan con mayúscula.
3. Desarrolla el constructor, el cual indicará todas las propiedades iniciales con las que cuenta la clase. Este, al final de todo, es una función.
4. Observar cómo asignamos cada parámetro del constructor hacia "this". Este último representará el objeto al cual estás instanciando y colocará las propiedades respectivas.
5. Una vez creado el constructor, podremos enfocarnos en sus comportamientos, que básicamente son sus funciones. A estas mismas, dentro de una clase, se les conoce como métodos.
6. Cerramos la clase y ahora hacemos una instancia de la misma, a través de la creación de una constante.
7. Hacemos un console.log para verificar su correcto instanciamiento.

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
