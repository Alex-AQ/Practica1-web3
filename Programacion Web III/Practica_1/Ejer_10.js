//Callback y Promesas en JS
//10. ¿Cuando es conveniente utilizar un callback, y cuando es necesario utilizar una
//promesa?

//RESPUESTA:

/*
"Los callbacks se usan para tareas simples o cuando una función 
 necesita ejecutar otra.Las promesas se usan cuando hay múltiples 
 operaciones asíncronas porque permiten manejar mejor errores y 
 evitar el 'callback hell'."
*/
// Ejemplo con callback
function saludar(nombre, callback) {
    console.log("Hola " + nombre);
    callback();
}

saludar("Juan", () => {
    console.log("Callback ejecutado");
});

// Ejemplo con promesa
function saludarPromesa(nombre) {
    return new Promise(resolve => {
        console.log("Hola " + nombre);
        resolve();
    });
}

saludarPromesa("Ana")
    .then(() => console.log("Promesa ejecutada"));