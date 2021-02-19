const path = require('path');

const mainController = {
    index:(req, res) => {
        res.render('index')
    },

    carrito:(req, res) => {
        res.render('productCart')
    }

}

module.exports = mainController