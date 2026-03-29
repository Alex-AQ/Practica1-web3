//Callback y Promesas en JS
//13. Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
//reescribir mejor con async/await haciendo el código más limpio y mantenible.

async function ejecutar() {
    let x = 1;
    x = x + 1;
    x = x + 1;
    console.log(x);
}

ejecutar();