//Callback y Promesas en JS
//11. Proporcione un ejemplo concreto de encadenamiento de promesas.

function suma(a, b) {
    return Promise.resolve(a + b);
}

suma(2, 3)
    .then(resultado => resultado * 2)
    .then(resultado => resultado + 1)
    .then(console.log); // 11