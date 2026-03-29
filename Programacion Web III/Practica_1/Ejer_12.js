//Callback y Promesas en JS
//12. Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede

function paso1(cb) {
    setTimeout(() => {
        console.log("Paso 1");
        cb();
    }, 1000);
}

function paso2(cb) {
    setTimeout(() => {
        console.log("Paso 2");
        cb();
    }, 2000);
}

paso1(() => {
    paso2(() => {
        console.log("Fin");
    });
});