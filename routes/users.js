const express = require('express')
const router = express.Router();
const usersController =require ('../controllers/usersController')

// Middlewares
const validationRegister = require('../Middlewares/validationsRegister')
const uploadFile = require('../Middlewares/multer')



router.get('/', usersController.login);
router.post('/', usersController.loginProcess);
router.get('/register', usersController.register);
router.post('/register', uploadFile.single('file'), validationRegister, usersController.guardado)


module.exports = router