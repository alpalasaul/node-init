const readline = require('readline-sync')

// consultar como consumir una api 
// usar json placeholde 
// menos axios

let response = ''

do {
    let resultado = 0;
    console.log('1. Suma')
    console.log('2. Resta')
    console.log('3. Multiplicación')
    console.log('4. División')

    response = readline.question('Selecciona la operacion: ')
    if (response !== '5') {
        const firstNumber = readline.question('Escriba el primer número: ')
        const secondNumber = readline.question('Escriba el segundo número: ')

        switch(response) {
            case "1":
                resultado = parseInt(firstNumber) + parseInt(secondNumber)
                console.log('El resultado es: ' + resultado)
                break
            case "2":
                resultado = parseInt(firstNumber) - parseInt(secondNumber)
                console.log('El resultado es: ' + resultado)
                break
            case "3":
                resultado = parseInt(firstNumber) * parseInt(secondNumber)
                console.log('El resultado es: ' + resultado)
                break
            case "4":
                resultado = parseInt(firstNumber) / parseInt(secondNumber)
                console.log('El resultado es: ' + resultado)
                break
        }
    }

} while(true)