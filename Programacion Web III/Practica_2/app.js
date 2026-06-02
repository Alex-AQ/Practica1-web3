const express = require('express');
require('./basedatos/conexion');

const app = express();

app.use(express.json());

const categoriasRoutes = require('./rutas/categorias');

app.use('/categorias', categoriasRoutes);

app.listen(3000, () => {
    console.log('Servidor ejecutandose en puerto 3000');
});
