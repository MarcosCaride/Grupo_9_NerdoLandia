const fs = require('fs')
const path = require('path');
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')

const User = require('../models/User');
const { send } = require('process');

const usersController = {
    
    register: (req, res) => {
        res.render('register')
    },
    
    guardado:  (req, res) => {
        let errores = validationResult(req)
        
        if (errores.errors.length > 0){
            return res.render('register', {
                errors: errores.mapped(),
                old: req.body 
            })
        }
        
        let userInDB = User.findByField('email', req.body.email)
        
        if (userInDB){
            return res.render('register', { errors: {
                'email':{
                    msg: 'Ya hay un usuarion con este email'
                }
            },
            old: req.body
        })
        
    }
    let userToCreate= {
        ...req.body,
        avatar: req.file.filename,
        contraseña: bcryptjs.hashSync(req.body.contraseña, 10)
    }
    
    User.create(userToCreate)
    return res.redirect('/')

    },

    login:(req, res) => {
        res.render('login')
    },

    loginProcess: (req, res) => {
        let userToLogIn = User.findByField('email', req.body.email)
        if(userToLogIn) {
            let comparePasswords = bcryptjs.compareSync(req.body.contraseña, userToLogIn.contraseña)
            if(comparePasswords){
                return res.send('Log in exitoso')
            }
            return res.render('login', {
                errors: {
                    contraseña: {
                        msg: 'Contraseña incorrecta'
                    }
                }
            })
        }
        return res.render('login', {
            errors: {
                email: {
                    msg: 'Email incorrecto'
                }
            }
        })
    },
}

module.exports = usersController
