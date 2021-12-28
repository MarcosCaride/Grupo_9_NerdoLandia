// const path = require('path');
const db = require('../../database/models');
// const sequelize = db.sequelize;
// const { Op } = require("sequelize");
// const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Tag = db.Tag;

//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const productsAPIController = {
    'list': (req, res) => {
        Tag.findAll({
            include: ["productoTag"]
        })
        .then(usuarios => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: usuarios.length,
                    url: 'api/products'
                },
                data: usuarios
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        Tag.findByPk(req.params.id)
            .then(usuarios => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: usuarios.length,
                        url: '/api/products/:id'
                    },
                    data: usuarios
                }
                res.json(respuesta);
            });
    },

}

module.exports = productsAPIController;