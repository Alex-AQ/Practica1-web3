//Callback y Promesas en JS
//15. Proporcione un ejemplo para convertir un callback en una promesa.

function funcionCallback(cb) {
    setTimeout(() => {
        cb("Hola desde callback");
    }, 1000);
}

function convertirAPromesa() {
    return new Promise(resolve => {
        funcionCallback(resolve);
    });
}

convertirAPromesa().then(console.log);