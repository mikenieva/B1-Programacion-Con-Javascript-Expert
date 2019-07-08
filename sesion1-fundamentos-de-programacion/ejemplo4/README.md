### Ejemplo 4: Ciclos

Pensemos que queremos repetir una palabra 5 veces y que aparezca en consola:

```javascript
console.log("hola");
console.log("hola");
console.log("hola");
console.log("hola");
console.log("hola");
```

Excelente, funcionará y se reflejarán en la consola. 

Ahora bien, si te dijera que queremos repetirlo 200 veces, entonces copiar y pegar cada línea se volvería ineficiente (aparte de odiar al que te dio la instrucción).

¿Qué podemos hacer?

```javascript
for(var i = 0; i<=200; i++){
    console.log("hola")
}
```

Con esto, obtendremos de retorno los 200 "hola".