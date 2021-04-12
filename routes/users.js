const express = require('express')
const router = express.Router();
const usersController =require ('../controllers/usersController')

// Middlewares
const validationRegister = require('../Middlewares/validationsRegister');
const uploadFile = require('../Middlewares/multer');
const guestMiddleware = require('../Middlewares/guestMiddleware');
const authMiddleware = require('../Middlewares/authMiddleware')

router.get('/', guestMiddleware, usersController.login);
router.post('/', usersController.loginProcess);
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', uploadFile.single('file'), validationRegister, usersController.guardado)
router.get ('/perfil', authMiddleware, usersController.perfil)
router.post('/logout', usersController.logout);

module.exports = router