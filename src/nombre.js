const interface = requiere('readline-sync')

let nombre = interface.question('Escribe tu nombre')

console.log('Hola' + nombre)