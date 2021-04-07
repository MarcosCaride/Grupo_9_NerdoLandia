const express = require('express')
const path = require('path')
const router = express.Router();
const usersController =require ('../controllers/usersController')
const multer = require('multer')
const { body } = require ('express-validator')



//no anda el check
//const check = require ('express-validator/check').check
//const validationResult = require ('express-validator/check').validationResult;

//validaciones 

const validateRegister = [
    body('nombre-apellido').notEmpty().withMessage('Debes completar este campo'),
    body('email').isEmail().withMessage('Debes completar un email válido'),
    body('domicilio').notEmpty().withMessage('Debes completar este campo'),
    body('telefono').notEmpty().withMessage('Debes completar este campo'),
    body('fecha').notEmpty().withMessage('Debes completar este campo'),
    body('contraseña').notEmpty().withMessage('Debes completar este campo'),
    body('confirmar-contraseña').notEmpty().withMessage('Debes completar este campo'),
    body('no-soy-un-robot').notEmpty().withMessage('Debes completar este campo'),
];

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
router.post('/', validateRegister, upload.single('file'), usersController.guardado)
router.post ('/login', [
    body('celectronico').isEmail().withMessage('El email es inválido'),
    body('contraseña').isLength({min: 8}).withMessage('La contraseña debe tener un mínimo de 8 caracteres'),
], usersController.processLogin)
router.get('/check', function (req, res){
    if(req.session.usuarioLogueado == undefined) {
        res.send('No estas logueado');
    } else {
        res.send('El usuario logueado es ' + req.session.usuarioLogueado);
    }
})

module.exports = router