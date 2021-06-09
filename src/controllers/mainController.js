const path = require('path');
const fs = require('fs');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const mainController = {
    index: async (req, res) => {
        let marvel = await db.Product.findAll({
            where: {
                id_franchise: 1
            }
        });

		let starWars = await db.Product.findAll({
            where: {
                id_franchise: 2
            }
        });

        let losSimpsons = await db.Product.findAll({
            where: {
                id_franchise: 3
            }
        });
        
        let imagenLogeado = req.imagenLogeado

        let androidesDelMes = products.filter(product => product.AndroideDelMes == 'true');
		// let legos = products.filter(product => product.Lego == 'true');
		// let Heroinas = products.filter(product => product.Heroinas == 'true');
		// let funkoPOP = products.filter(product => product.Funko == 'true');

        let productosdb = await db.Product.findAll()
        let categorias = await db.Category.findAll()
		let franquicias = await db.Franchise.findAll()


		res.render('index', {losSimpsons, marvel, starWars, androidesDelMes, productosdb, categorias, franquicias, imagenLogeado })
	},

    carrito: async (req, res) => {
        let imagenLogeado = req.imagenLogeado
        let marvel = await db.Product.findAll({
            where: {
                id_franchise: 1
            }
        });
        let precioTotal = 0;
        res.render('productCart', {marvel, precioTotal,imagenLogeado})
    },

    categorias: async (req, res) => {
        let categoria = await db.Product.findAll({
            where: {
                id_franchise: req.params.categoriaS
            }
        })
        let param = req.params.categoriaS
        // res.send(categoria)
        // let categoria = products.filter(product => (product.Categoria == req.params.categoriaS))
        let marvelBanner = "MarvelBanner.jpg"
        let starWarsBanner =  "Star WarsBanner.jpg"
        let losSimpsonsBanner =  "LosSimpsonsBanner.jpg"

        let imagenLogeado = req.imagenLogeado

        res.render('categorias', {categoria, marvelBanner, starWarsBanner, losSimpsonsBanner, param, imagenLogeado})
    },

    heroinas: (req,res) => {
        let imagenLogeado = req.imagenLogeado
		let Heroinas = products.filter(product => product.Heroina == 'true');
        res.render('heroinas', {Heroinas, imagenLogeado})
    },

    contacto: (req, res) => {
        let imagenLogeado = req.imagenLogeado
        res.render('aboutUs',{imagenLogeado})
    },

    error404: (req, res) => {
        let imagenLogeado = req.imagenLogeado
        res.render('404error',{imagenLogeado})
    },
}

module.exports = mainController