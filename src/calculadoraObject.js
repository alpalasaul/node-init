const readline = require('readline-sync')

let response = ''

const OPTIONS = {
    SUMA: '1',
    RESTA: '2',
    MULTIPLICACION: '3',
    DIVISION: '4'
}

const { SUMA, RESTA, MULTIPLICACION, DIVISION } = OPTIONS

const OPERATIONS = {
    [SUMA]: (a, b) => a + b,
    [RESTA]: (a, b) => a - b,
    [MULTIPLICACION]: (a, b) => a * b,
    [DIVISION]: (a, b) => a / b
}

do {
    let resultado = 0
    console.log('1. Suma')
    console.log('2. Resta')
    console.log('3. Multiplicación')
    console.log('4. División')

    response = readline.question('Selecciona la operacion: ')
    if (response !== '5') {
        const firstNumber = readline.question('Escriba el primer número: ')
        const secondNumber = readline.question('Escriba el segundo número: ')
        resultado = OPERATIONS[response](parseInt(firstNumber), parseInt(secondNumber))
        console.log(resultado)
    }
} while (true)
