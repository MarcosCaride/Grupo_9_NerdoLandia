const express = require('express')
const path = require('path')
const router = express.Router();
const productsController =require ('../controllers/productsController')
const multer = require('multer')

let storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './public/Imagenes/products');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

var upload = multer({ storage: storage })


router.get('/', productsController.productDetail);
router.get('/administrador', productsController.editor)
router.post('/', upload.single('file'), productsController.guardado)


module.exports = router