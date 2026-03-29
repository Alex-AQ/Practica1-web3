//Callback y Promesas en JS
//16. Proporcione un ejemplo para migrar una función con promesas a async/await.

//Forma original con promesas
function obtenerUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Usuario obtenido");
        }, 2000);
    });
}

obtenerUsuario()
    .then(res => console.log("Con promesas:", res))
    .catch(err => console.error(err));


//Forma migrada a async/await
async function ejecutar() {
    try {
        let resultado = await obtenerUsuario();
        console.log("Con async/await:", resultado);
    } catch (error) {
        console.error(error);
    }
}

ejecutar();