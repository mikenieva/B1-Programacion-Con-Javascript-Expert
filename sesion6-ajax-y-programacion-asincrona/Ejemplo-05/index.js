// PROMESAS: EJEMPLO 5


const asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b)
            } else {
                reject('Los argumentos deben ser números')
            }
        }, 1500)
    })
}

asyncAdd(3, 7).then((res) => {
    console.log('Result1:', res)
    return asyncAdd(res, 33)
}).then((res) => {
    console.log('Should be 45: ', res)
}).catch((errorMessage) => {
    console.log(errorMessage)
})
