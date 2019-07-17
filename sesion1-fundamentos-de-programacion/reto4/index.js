function contarNumeros(numeroMax){
    var i;
    for (i = 0; i<=numeroMax; i++) {
        if (i === 0) {
                console.log(i +  " es par");
        }
        else if (i % 2 === 0) {
                console.log(i + " es par");   
        }
        else {
                console.log(i + " es impar");
        }
    }
}

contarNumeros(100)
