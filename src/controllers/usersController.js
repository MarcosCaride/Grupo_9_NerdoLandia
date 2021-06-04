const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')
const User = require('../models/User');
const { send } = require('process');

const db = require ("../database/models");
//const { DATE } = require('sequelize/types');

const usersController = {
    
    register: (req, res) => {
        res.render('register')
    },
    
    guardado: async (req, res) => {

        let imagenLogeado = req.imagenLogeado

        
        let errores = validationResult(req)
        if (errores.errors.length > 0){
            return res.render('register', {
                errors: errores.mapped(),
                old: req.body 
            })
        }


        await db.Users.findOne({
            where: {
             email: req.body.email
            
        }
            }).then((usuario)=> { 
                if (usuario){
                    return res.render('register', { errors: {
                        'email':{
                            msg: 'Ya hay un usuario con este email'
                        }
                    },
                    old: req.body
                })
              }
                 });

                 let imag;
		if(!req.file){
			imag = "default-placeholder.png"
		}else{
		imag = req.file.filename;
		}
        await db.Users.create({
                     name: req.body.name,
                     surname: req.body.surname, 
                     email: req.body.email,
                     password: bcryptjs.hashSync(req.body.contraseña, 10),
                     id_provice: 1,
                     address: req.body.domicilio,
                     avatar: imag,
                     dateOfBirth: req.body.fecha,
                     phoneNumber: req.body.telefono,
                     created_at: Date.now()
                     
                 })

    return res.redirect('/', {imagenLogeado})

    },

    login:(req, res) => {
        let imagenLogeado = req.imagenLogeado
        res.render('login', {imagenLogeado})
    },

    loginProcess: async (req, res) => {
        let imagenLogeado = req.imagenLogeado


        let userToLogIn = await db.Users.findOne({
            where:  {
                email: req.body.email
            }
        })
        if(!userToLogIn){
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Email incorrecto'
                    }
                }
            })
        }

        let isOkThePassword = bcryptjs.compareSync(req.body.contraseña, userToLogIn.password)
        


        if (isOkThePassword) {
            delete userToLogIn.contraseña;
            req.session.userLogged = userToLogIn;

            if (req.body.recordarme){
                res.cookie('userEmail', req.body.email, {maxAge: (10000 * 60) * 2 })
            }
            res.redirect('users/perfil')
        }
            return res.render('login', {
                errors: {
                    contraseña: {
                        msg: 'Contraseña incorrecta'
                    }
                },
                imagenLogeado
            })
    },

    perfil: (req, res) => {
        let imagenLogeado = "";
		
        if (req.session.userLogged) {
            imagenLogeado = req.session.userLogged.avatar
        }
        return res.render ('perfil', {
            user: req.session.userLogged,
            imagenLogeado
        })
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect ('/');
    }
}

module.exports = usersController
