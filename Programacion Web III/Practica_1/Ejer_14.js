//Callback y Promesas en JS
//14. Proporcione un ejemplo para convertir una promesa en un callback.

function miPromesa() {
    return Promise.resolve("Hola mundo");
}

function usarCallback(callback) {
    miPromesa().then(resultado => callback(resultado));
}

usarCallback((res) => {
    console.log(res);
});