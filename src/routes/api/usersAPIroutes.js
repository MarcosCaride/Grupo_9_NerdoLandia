const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

//Rutas
//Listado de todos los usuarios
router.get('/', usersAPIController.list);
//Detalle del usuario
router.get('/:id', usersAPIController.detail);

/* 
//Agregar un usuario
router.post('/create', usersAPIController.create);
//Modificar un usuario
router.put('/update/:id', usersAPIController.update);
//Eliminar un usuario
router.delete('/delete/:id', usersAPIController.destroy); */

module.exports = router;