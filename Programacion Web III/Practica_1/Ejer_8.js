//Callback y Promesas en JS
//8. Realizar un código para ejecutar una función callback después 2 segundos.

function ejecutarCallback(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}

function miCallback() {
    console.log("Callback ejecutado después de 2 segundos");
}

ejecutarCallback(miCallback);