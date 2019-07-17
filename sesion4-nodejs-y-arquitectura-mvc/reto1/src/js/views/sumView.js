// 1. CONSTANTES

const resultArea = document.querySelector("#resultado")

// B. CONSTANTES - EXPORTACIONES

export const getInputNumA = document.querySelector("#numA")
export const getInputNumB = document.querySelector("#numB")

// 2. FUNCIONES - CONSTANTES

// 2. FUNCIONES - EXPORTACIONES

export const parseInputs = (input) => {
    return parseInt(input.value)
}

export const clearArea = (area) => {
    return resultArea.innerHTML = ""
}

export const renderSumView = (result) => {
    const markup = `
        <span>
            ${result}
        </span>
    `

    resultArea.insertAdjacentHTML('beforeend', markup)
}


export const getInput = () => elements.searchInput.value

export const clearInput = () => {
    elements.searchInput.value = ''
}

export const clearResults = () => {
    elements.searchReslist.innerHTML = '';
    elements.searchResPages.innerHTML = '';
}
