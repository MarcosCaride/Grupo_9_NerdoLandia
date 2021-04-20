const express = require('express')
const path = require('path')
const router = express.Router();
const productsController =require ('../controllers/productsController')
const multer = require('multer')


// Middlewares
const authMiddleware = require('../Middlewares/authMiddleware')

let storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './public/Imagenes/products');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

var upload = multer({ storage: storage })

// Mostrar un producto
router.get('/', productsController.productDetail);

router.get('/detail/:id', productsController.detail)

// Creacion de Productos
router.get('/administrador', authMiddleware, productsController.creador)
router.post('/', upload.single('file'), productsController.guardado)

// Edicion de Productos
router.get('/edit/:id', productsController.editor)
router.put('/:id', upload.single('file'), productsController.updateproducto)


// Borrar un producto
router.delete('/:id', productsController.delete)


module.exports = router