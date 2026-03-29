//2. Crear una función que invierta el orden de las palabras en una frase.
//let cad = miFuncion(“abcd”)
//console.log(obj) // dcba


function miFuncion(texto) {
    return texto.split("").reverse().join("");
}

let cad = miFuncion("alex");
console.log(cad); // xela