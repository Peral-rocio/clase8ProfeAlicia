const prompt = require("prompt-sync")({ sigint: true });

// **********************************************************EJERCICIO UNO 
// En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes
// escribir un programa en JavaScript que:
// 1. Solicite al usuario que ingrese un número cualquiera.
// 2. Calcule el doble de ese número.
// 3. Muestre el resultado en la consola.


//SOLUCION:

//originalmente lo pense asi:

let numeroUsuario = prompt ("Hola, ingrese un número porfavor");

console.log(numeroUsuario*2)

//luego me di cuenta que podia resolverlo asi tambien:

//let numeroMultiplicado = prompt (numeroUsuario*2)