const express = require('express')
const path = require('path')
const router = express.Router();
const usersController =require ('../controllers/usersController')
const multer = require('multer')

let storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './public/Imagenes/Users');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

var upload = multer({ storage: storage })


router.get('/', usersController.login);
router.get('/register', usersController.register)
router.post('/', upload.single('file'), usersController.guardado)


module.exports = router