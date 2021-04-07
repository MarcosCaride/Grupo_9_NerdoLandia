const fs = require('fs')
const path = require('path');

const usersFilePath =  path.join(__dirname, '../data/usersData.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"))
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');



const usersController = {
    login:(req, res) => {
        res.render('login')
    },

    processLogin: function(req, res){
        let errors = validationResult(req);
        
        if (errors.isEmpty()){
            let usersJSON = fs.readFileSync ('usersData.json', {encoding: UTF-8})
            let users;
            if (usersJSON == " "){
                users = [];
            } else {
                users = JSON.parse(usersJSON)
            }

            for (let i = 0; i < users.length; i++) {
                if (req.body.email == users[i].email && bcrypt.compareSync(req.body.contraseña),users[i].contraseña){
                    res.send('Estas logueado')
                } 
            }

            if (usuarioALoguearse == undefined) {
                return res.render('login', {errors: [
                    {msg:'Credenciales inválidas'}
                ]})
            }
            req.session.usuarioLogueado = usuarioALoguearse;
            res.render('Estas logueado!')

        }else {
            return res.render('login', {errors: errors.errors})
        }
    },

    register: (req, res) => {
        res.render('register')
    },

    guardado:  (req, res, next) => {
        let errors = validationResult(req);  
        if (errors.isEmpty()){
            let usersJSON = fs.readFileSync ('usersData.json', {})
            let users;
            if (usersJSON == " "){
                users = [];
            } else {
                users = JSON.parse(usersJSON)
            }

        }else {
            return res.render('login', {errors: errors.errors})
        }
        let usuario = {
            nombre: req.body.nombre,
            edad: req.body.edad,
            email: req.body.email,
            password: bcrypt.hashSync (req.body.contraseña, 10)
        }
        let nuevoUsuario = req.body;
        nuevoUsuario.id = users.length + 1;
        let imag;
        if(!req.file ){
            imag = "default-placeholder.png"
        }else{
        imag = req.file.filename;
        }
        nuevoUsuario.image = imag;
        users.push(nuevoUsuario)
        let nuevosUsuarios = JSON.stringify(users, null, " ")
        fs.writeFileSync(usersFilePath, nuevosUsuarios)

        res.redirect('/')
    }

}

module.exports = usersController
