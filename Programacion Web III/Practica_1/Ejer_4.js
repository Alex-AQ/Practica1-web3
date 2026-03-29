//4. Crear una función que reciba un arreglo de números y devuelva el número mayor y el
//menor, en un objeto.
//let obj = miFuncion([3,1,5,4,2])
//console.log(obj) // { mayor: 5, menor: 1 }

function miFuncion(arr) {
    let mayor = Math.max(...arr);
    let menor = Math.min(...arr);

    return { mayor, menor };
}

let obj = miFuncion([3,1,5,4,2]);
console.log(obj); // { mayor: 5, menor: 1 }