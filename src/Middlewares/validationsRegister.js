const { body } = require('express-validator')

let validationRegister = [
    body('name')
        .notEmpty().withMessage('Debes completar este campo'),
    body('surname')
        .notEmpty().withMessage('Debes completar este campo'),
    body('telefono')
        .notEmpty().withMessage('Debes completar este campo'),
    body('domicilio')
        .notEmpty().withMessage('Debes completar este campo'),
    body('fecha')
        .notEmpty().withMessage('Debes completar este campo'),
    body('email')
        .notEmpty().withMessage('Debes completar este campo').bail()
        .isEmail().withMessage('Debes completar un Email valido'),
    body('contraseña')
        .notEmpty().withMessage('Debes completar este campo').bail()
        .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, }).withMessage('La contraseña no es lo suficiente fuerte'),
]

module.exports = validationRegister