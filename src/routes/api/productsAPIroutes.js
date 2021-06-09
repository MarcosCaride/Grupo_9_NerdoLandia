const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de todos los productos
router.get('/', productsAPIController.list);
//Detalle del producto
router.get('/:id', productsAPIController.detail);

/* 
//Agregar un producto
router.post('/create', productsAPIController.create);
//Modificar un producto
router.put('/update/:id', productsAPIController.update);
//Eliminar un producto
router.delete('/delete/:id', productsAPIController.destroy); */

module.exports = router;