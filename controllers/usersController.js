const fs = require('fs')
const path = require('path');
const { validationResult } = require('express-validator')

const usersFilePath =  path.join(__dirname, '../data/usersData.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"))

const usersController = {
    login:(req, res) => {
        res.render('login')
    },

    register: (req, res) => {
        res.render('register')
    },

    guardado:  (req, res) => {
        let errores = validationResult(req)

        if (errores.isEmpty()){
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
        }else{
            return res.render('register', { errors: errores.mapped(), old: req.body })
        }

    }

}

module.exports = usersController
