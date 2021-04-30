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
    
    guardado:  async (req, res) => {
        
        let errores = validationResult(req)
        
        if (errores.errors.length > 0){
            return res.render('register', {
                errors: errores.mapped(),
                old: req.body 
            })
        }


        await db.User.findOne({
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
                 await db.User.create({
                     name: req.body.name,
                     surname: req.body.surname, 
                     email: req.body.email,
                     password: bcryptjs.hashSync(req.body.contraseña, 10),
                     id_provice: "",
                     address: req.body.domicilio,
                     avatar: imag,
                     dateOfBirth: req.body.fecha,
                     phoneNumber: req.body.telefono,
                     created_at: Date.now()
                     
                 })

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
