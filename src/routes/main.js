const express = require('express')
const router = express.Router();
const mainController =require ('../controllers/mainController')

router.get('/', mainController.index);
router.get('/Carrito', mainController.carrito)
router.get('/categorias/:categoriaS', mainController.categorias)
router.get('/heroinas', mainController.heroinas)
router.get('/sobrenosotros', mainController.contacto)

// 404 Not Found
router.get('/blog', mainController.blog)


module.exports = router