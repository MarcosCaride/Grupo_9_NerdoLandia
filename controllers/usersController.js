const fs = require('fs')
const path = require('path');
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')
const session = require ('express-session');
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
                    msg: 'Ya hay un usuario con este email'
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

        if(!userToLogIn){
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Email incorrecto'
                    }
                }
            })
        }

        let isOkThePassword = bcryptjs.compareSync(req.body.contraseña, userToLogIn.contraseña)

        if (isOkThePassword) {
            delete userToLogIn.contraseña;
            req.session.userLogged = userToLogIn;

            if (req.body.recordarme){
                res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2 })
            }

            return res.redirect ('/users/perfil');   
        }
            return res.render('login', {
                errors: {
                    contraseña: {
                        msg: 'Contraseña incorrecta'
                    }
                }
            })
    },

    perfil: (req, res) => {
        console.log(req.cookies.userEmail);
        //console.log('Estas en LOGIN')
       //console.log(req.session);
        return res.render ('perfil', {
            user: req.session.userLogged
        })
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        //console.log(req.session)
        return res.redirect ('/');
    }
}

module.exports = usersController
