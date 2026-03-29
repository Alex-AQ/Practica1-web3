//5. Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
//al revés).
//let band = miFuncion(“oruro”)
//console.log(band) // true
//let band = miFuncion(“hola”)
//console.log(band) // false

function miFuncion(texto) {
    let limpio = texto.toLowerCase();
    let invertido = limpio.split("").reverse().join("");

    return limpio === invertido;
}

let band = miFuncion("oruro");
console.log(band); // true

band = miFuncion("hola");
console.log(band); // false