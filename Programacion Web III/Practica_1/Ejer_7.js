////Desestructuración de arrays en JS
//7. Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
//elementos de un arreglo, mediante desestructuración.

function miFuncion(arr) {
    let [primero, segundo, ...resto] = arr;

    return resto;
}

let resultado = miFuncion([10, 20, 30, 40, 50]);

console.log(resultado); 
// [30, 40, 50]