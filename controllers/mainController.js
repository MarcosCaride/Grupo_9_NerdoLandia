const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    index: (req, res) => {
		let losSimpsons = products.filter(product => product.category=='Los Simpsons');
		let marvel = products.filter(product => product.category=='Marvel');
		let starWars = products.filter(product => product.category=='Star Wars');
        let categoryBanner = req.params.categoriaS + "Banner.jpg"

		res.render('index',{losSimpsons, marvel, starWars, categoryBanner})
	},

    carrito:(req, res) => {
        res.render('productCart')
    },

    categorias: (req, res) => {
        let categoria = products.filter(product => (product.category == req.params.categoriaS))
        let categoryBanner = req.params.categoriaS + "Banner.jpg"
        res.render('categorias', {categoria, categoryBanner})
    },

    huesped: (req, res) => {
        res.send("Hola visitante")
    }
}

module.exports = mainController