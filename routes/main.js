const express = require('express')
const router = express.Router();
const path = require('path');
const mainController =require ('../controllers/mainController')
const huespedMiddleware = require('../middlewares/huesped');

router.get('/', mainController.index);
router.get('/Carrito', mainController.carrito)
router.get('/categorias/:categoriaS', mainController.categorias)

router.get('/huesped', huespedMiddleware, mainController.huesped);

module.exports = router