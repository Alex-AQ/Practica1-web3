//Desestructuración de arrays en JS
//6. Tomar los dos primeros elementos de un arreglo y almacenarlos en dos variables
//mediante desestructuración.

function miFuncion(arr) {
    let [primero, segundo] = arr;

    return { primero, segundo };
}

let resultado = miFuncion([10, 20, 30, 40]);

console.log(resultado); 
// { primero: 10, segundo: 20 }