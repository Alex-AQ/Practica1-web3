const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practica2web3'
});

conexion.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Conexion exitosa');
    }
});

module.exports = conexion;
