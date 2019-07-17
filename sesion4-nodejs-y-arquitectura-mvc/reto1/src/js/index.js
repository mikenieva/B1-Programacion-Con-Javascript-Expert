// IMPORTACIONES
import Sum from './models/Sum'
import Subtraction from './models/Subtraction'

import * as sumView from './views/sumView'
import * as subtractionView from './views/subtractionView'

document.querySelector("#sumar").addEventListener(("click"), () => {
    event.preventDefault()
    
    sumView.clearArea()

    const numA = sumView.parseInputs(sumView.getInputNumA)
    const numB = sumView.parseInputs(sumView.getInputNumB)
    
    const resultado = Sum(numA, numB)

    return sumView.renderSumView(resultado)
})


document.querySelector("#restar").addEventListener(("click"), () => {
    event.preventDefault()
    
    subtractionView.clearArea()

    const numA = subtractionView.parseInputs(sumView.getInputNumA)
    const numB = subtractionView.parseInputs(sumView.getInputNumB)
    
    const resultado = Subtraction(numA, numB)

    return subtractionView.renderSubtractionView(resultado)
})


