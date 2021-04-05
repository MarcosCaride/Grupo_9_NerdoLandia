const express = require('express')
const path = require('path')
const router = express.Router();
const usersController =require ('../controllers/usersController')
const multer = require('multer')
const { check } = require('express-validator')

let validaciones = [
    check('nombreApellido')
        .notEmpty().withMessage('Debes completar este campo'),
    check('telefono')
        .notEmpty().withMessage('Debes completar este campo'),
    check('domicilio')
        .notEmpty().withMessage('Debes completar este campo'),
    check('fecha')
        .notEmpty().withMessage('Debes completar este campo'),
    check('email')
        .notEmpty().withMessage('Debes completar este campo').bail()
        .isEmail().withMessage('Debes completar un Email valido'),
    check('contraseña')
        .notEmpty().withMessage('Debes completar este campo').bail()
        .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, }).withMessage('La contraseña no es lo suficiente fuerte'),
]

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
router.post('/', upload.single('file'), validaciones, usersController.guardado)


module.exports = router