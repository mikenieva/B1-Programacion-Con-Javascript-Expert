/* 
NOTAS DE DESARROLLADOR

- En esta primera propuesta se resuelve el problema de realizar las operaciones aritméticas. Sin embargo, podríamos sintetizar el código aún más.

¿Cómo podrías hacerlo más corto y sin repetir código?

Considera:
- Un sólo addEventListener para todos los botones
- Lograr no tener sentencias repetidas dentro de los callbacks de los eventos.

*/

// 1. SELECCIÓN DE NODOS
var firstQuantity   = document.getElementById("firstQuantity")
var secondQuantity  = document.getElementById("secondQuantity")
var sumButton       = document.getElementById("sum-button")
var minusButton     = document.getElementById("minus-button")
var multiplyButton  = document.getElementById("multiply-button")
var divideButton    = document.getElementById("divide-button")
var result          = document.getElementById("result")


// 2. DECLARACIÓN DE FUNCIONES
function operation(a, b, type){
    var parsedA = parseInt(a)
    var parsedB = parseInt(b)

    switch(type){
        case "sum":
            return parsedA + parsedB
        case "minus":
            return parsedA - parsedB
        case "multiply":
            return parsedA * parsedB
        case "divide":
            return parsedA / parsedB
        default:
            return
    }
}

// 3. INVOCACIÓN DE FUNCIONES
sumButton.addEventListener("click", function(){
    var spanElement = document.createElement("span")
    var resultOperation = operation(firstQuantity.value, secondQuantity.value, "sum")

    if(result.childNodes[2]){
        result.removeChild(result.childNodes[2])
    }

    var textContent = document.createTextNode(resultOperation)
    spanElement.appendChild(textContent)
    result.appendChild(spanElement)
})

minusButton.addEventListener("click", function(){
    var spanElement = document.createElement("span")
    var resultOperation = operation(firstQuantity.value, secondQuantity.value, "minus")

    if(result.childNodes[2]){
        result.removeChild(result.childNodes[2])
    }

    var textContent = document.createTextNode(resultOperation)
    spanElement.appendChild(textContent)
    result.appendChild(spanElement)
})

multiplyButton.addEventListener("click", function(){
    var spanElement = document.createElement("span")
    var resultOperation = operation(firstQuantity.value, secondQuantity.value, "multiply")

    if(result.childNodes[2]){
        result.removeChild(result.childNodes[2])
    }

    var textContent = document.createTextNode(resultOperation)
    spanElement.appendChild(textContent)
    result.appendChild(spanElement)
})

divideButton.addEventListener("click", function(){
    var spanElement = document.createElement("span")
    var resultOperation = operation(firstQuantity.value, secondQuantity.value, "divide")

    if(result.childNodes[2]){
        result.removeChild(result.childNodes[2])
    }

    var textContent = document.createTextNode(resultOperation)
    spanElement.appendChild(textContent)
    result.appendChild(spanElement)
})

