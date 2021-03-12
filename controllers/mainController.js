const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    index: (req, res) => {
		let losSimpsons = products.filter(product => product.category=='Los Simpsons');
		let marvel = products.filter(product => product.category=='Marvel');
		res.render('index',{losSimpsons, marvel})
	},

    carrito:(req, res) => {
        res.render('productCart')
    }

}

module.exports = mainController