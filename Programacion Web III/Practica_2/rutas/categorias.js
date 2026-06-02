const express = require('express');
const router = express.Router();

const conexion = require('../basedatos/conexion');

/*1. Crea un endpoint POST /categorias que permita registrar una nueva categoría
enviando nombre y descripcion en el body de la petición.
*/
router.post('/', (req, res) => {

    const { nombre, descripcion } = req.body;

    const sql =
    `INSERT INTO categorias(nombre, descripcion)
     VALUES (?, ?)`;

    conexion.query(
        sql,
        [nombre, descripcion],
        (error, resultado) => {

            if (error) {
                return res.status(500).json(error);
            }

            res.json({
                mensaje: 'Categoria registrada correctamente'
            });

        }
    );

});

/*2. Crea un endpoint GET /categorias que devuelva todas las categorías
registradas en la base de datos.
*/
router.get('/', (req, res) => {

    const sql = 'SELECT * FROM categorias';

    conexion.query(sql, (error, resultado) => {

        if (error) {
            return res.status(500).json(error);
        }

        res.json(resultado);

    });

});

/*3. Crea un endpoint GET /categorias/:id que devuelva la categoría con el ID
especificado y además, incluya todos los productos que pertenecen a esa
categoría.
*/
router.get('/:id', (req, res) => {

    const id = req.params.id;

    const sqlCategoria =
    'SELECT * FROM categorias WHERE id = ?';

    conexion.query(
        sqlCategoria,
        [id],
        (error, categoria) => {

            if (error) {
                return res.status(500).json(error);
            }

            const sqlProductos =
            'SELECT * FROM productos WHERE categoria_id = ?';

            conexion.query(
                sqlProductos,
                [id],
                (error, productos) => {

                    if (error) {
                        return res.status(500).json(error);
                    }

                    res.json({
                        categoria: categoria[0],
                        productos: productos
                    });

                }
            );

        }
    );

});

/*4. Crea un endpoint PATCH /categorias/:id que permita actualizar todos los
datos de la categoría con el ID especificado.
*/
router.patch('/:id', (req, res) => {

    const id = req.params.id;

    const { nombre, descripcion } = req.body;

    const sql =
    `UPDATE categorias
     SET nombre = ?, descripcion = ?
     WHERE id = ?`;

    conexion.query(
        sql,
        [nombre, descripcion, id],
        (error, resultado) => {

            if (error) {
                return res.status(500).json(error);
            }

            res.json({
                mensaje: 'Categoria actualizada correctamente'
            });

        }
    );

});

/*5. Crea un endpoint DELETE /categorias/:id que elimine la categoría indicada
y, al mismo tiempo, elimine automáticamente todos los productos que
pertenecen a esa categoría.*/
router.delete('/:id', (req, res) => {

    const id = req.params.id;

    const sql =
    'DELETE FROM categorias WHERE id = ?';

    conexion.query(
        sql,
        [id],
        (error, resultado) => {

            if (error) {
                return res.status(500).json(error);
            }

            res.json({
                mensaje: 'Categoria eliminada correctamente'
            });

        }
    );

});


module.exports = router;
