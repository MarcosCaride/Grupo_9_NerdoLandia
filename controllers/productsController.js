const path = require('path');

const productsController = {
    productDetail:(req, res) => {
        res.render('productDetail')
    },

    editor: (req, res) => {
        res.render('administrator')
    }

}

module.exports = productsController