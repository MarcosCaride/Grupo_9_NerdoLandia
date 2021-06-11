const express = require('express');
const router = express.Router();
const CategoriesApiController = require('../../controllers/api/CategoriesApiController');

//Rutas
//Listado de todos los usuarios
router.get('/', CategoriesApiController.list);
//Detalle del usuario

/* 
//Agregar un usuario
router.post('/create', usersAPIController.create);
//Modificar un usuario
router.put('/update/:id', usersAPIController.update);
//Eliminar un usuario
router.delete('/delete/:id', usersAPIController.destroy); */

module.exports = router;