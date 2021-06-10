const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Users = db.User;

//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const usersAPIController = {
    'list': (req, res) => {
        db.Users.findAll()
        .then(usuarios => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: usuarios.length,
                    url: 'api/users'
                },
                data: usuarios.map (user => {
                    return {
                        id: user.id,
                        name: user.name,
                        surname: user.surname,
                        email: user.email,
                        detail: ('api/users/' + user.id )
                    }
                })
            }
                res.json(respuesta);
            })
    },
    
   'detail': (req, res) => {
        db.Users.findByPk(req.params.id)
            .then(usuarios => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: usuarios.length,
                        url: '/api/users/:id'
                    },
                    data: usuarios
                }
                res.json(respuesta);
            });
    }, 

}

module.exports = usersAPIController;