const path = require('path');

const productsController = {
    productDetail:(req, res) => {
        res.render('productDetail')
    }

}

module.exports = productsController