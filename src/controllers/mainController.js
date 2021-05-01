const path = require('path');
const fs = require('fs');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    index: async (req, res) => {
		let losSimpsons = products.filter(product => product.Categoria =='Los Simpsons');
		let marvel = products.filter(product => product.Categoria =='Marvel');
		let starWars = products.filter(product => product.Categoria == 'Star Wars');
		let androidesDelMes = products.filter(product => product.AndroideDelMes == 'true');
		// let legos = products.filter(product => product.Lego == 'true');
		// let Heroinas = products.filter(product => product.Heroinas == 'true');
		// let funkoPOP = products.filter(product => product.Funko == 'true');

        let productosdb = await db.Product.findAll()
        let categorias = await db.Category.findAll()
		let franquicias = await db.Franchise.findAll()


		res.render('index', {losSimpsons, marvel, starWars, androidesDelMes, productosdb, categorias, franquicias})
	},

    carrito:(req, res) => {
		let marvel = products.filter(product => product.Categoria =='Marvel');
        let precioTotal = 0;
        res.render('productCart', {marvel, precioTotal})
    },

    categorias: (req, res) => {
        let categoria = products.filter(product => (product.Categoria == req.params.categoriaS))
        let categoryBanner = req.params.categoriaS + "Banner.jpg"
        res.render('categorias', {categoria, categoryBanner})
    },

    heroinas: (req,res) => {
		let Heroinas = products.filter(product => product.Heroina == 'true');
        res.render('heroinas', {Heroinas})
    },

    contacto: (req, res) => {
        res.render('aboutUs')

    }
}

module.exports = mainController