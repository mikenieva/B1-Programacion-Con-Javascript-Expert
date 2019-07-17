// IMPORTACIONES
import Sum from './models/Sum'
import * as sumView from './views/sumView'

document.querySelector("#sumar").addEventListener(("click"), () => {
    event.preventDefault()
    
    sumView.clearArea()

    const numA = sumView.parseInputs(sumView.getInputNumA)
    const numB = sumView.parseInputs(sumView.getInputNumB)
    
    const resultado = Sum(numA, numB)

    return sumView.renderSumView(resultado)
})



