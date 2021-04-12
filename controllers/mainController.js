const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    index: (req, res) => {
		let losSimpsons = products.filter(product => product.Categoria =='Los Simpsons');
		let marvel = products.filter(product => product.Categoria =='Marvel');
		let starWars = products.filter(product => product.Categoria == 'StarWars');
		let legos = products.filter(product => product.Lego == 'true');
		let Heroinas = products.filter(product => product.Heroinas == 'true');
		let androidesDelMes = products.filter(product => product.AndroideDelMes == 'true');
		let funkoPOP = products.filter(product => product.Funko == 'true');
        let categoryBanner = req.params.Categoria + "Banner.jpg"

		res.render('index', {losSimpsons, marvel, starWars, legos, Heroinas, androidesDelMes, funkoPOP, categoryBanner})
	},

    carrito:(req, res) => {
        res.render('productCart')
    },

    categorias: (req, res) => {
        let categoria = products.filter(product => (product.category == req.params.categoriaS))
        let categoryBanner = req.params.categoriaS + "Banner.jpg"
        res.render('categorias', {categoria, categoryBanner})
    },

    heroinas: (req,res) => {
		let Heroinas = products.filter(product => product.Heroina == 'true');
        res.render('heroinas', {Heroinas})
    }
}

module.exports = mainController