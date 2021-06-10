const { decodeBase64 } = require('bcryptjs');
const fs = require('fs')
const path = require('path');

const CategoryController = require('./Category.controller')

//para DB
const db = require('../database/models');

const Franchise = db.Franchise;
const Category = db.Category
const Product = db.Product
const Tag = db.Tag

// CONTROLADOR

const productsController = {
	detail: (req,res) =>{

        let marvelBanner = "MarvelBanner.jpg"
        let starWarsBanner =  "Star WarsBanner.jpg"
        let losSimpsonsBanner =  "LosSimpsonsBanner.jpg"

        let imagenLogeado = req.imagenLogeado

			db.Product.findByPk(req.params.id, {
				include: ["franquicia_producto", "productoTag"]
			}
			)
				.then(producto => {
					res.render('detail', {
						product: producto,
						user: req.session.userLogged,
						imagenLogeado, marvelBanner, starWarsBanner, losSimpsonsBanner
					});
				});
/* 			include: [{association: "franquicia-producto"},{association:"producto-categoria"}]
		}
			.then(function (producto) {
				res.render("detail", {producto:producto})
			}) */
	},

	//solamente se muestra el formulario, GET
    creador: async (req, res) => {
		let categorias = await db.Category.findAll()
		let tag = await Tag.findAll()
		let franquicias = await db.Franchise.findAll()
        let imagenLogeado = req.imagenLogeado


		res.render('administrator', {categorias, franquicias, productEdit: "", imagenLogeado, tag})

    },

	//mas de un pedido asincronico, ojo
	editor: (req, res) => {
	
		let productEdit = db.Product.findByPk(req.params.id);
		let tag = Tag.findAll()
		let pedidoCategorias = db.Category.findAll();
		let franquicias =  db.Franchise.findAll()
        let imagenLogeado = req.imagenLogeado

		Promise.all([productEdit, pedidoCategorias, franquicias, tag])
			.then(function([productEdit, categoria, franquicias, tag]){
				res.render("administrator", { productEdit , categorias:categoria, franquicias, imagenLogeado, tag })
			}).catch(e=>console.log(e))
	},
	
	//se guarda lo del form, POST
    guardado: async  (req, res) => {
		let imag;
		if(!req.file){
			imag = "default-placeholder.png"
		}else{
		imag = req.file.filename;
		}



		let producto = await db.Product.create({
			name: req.body.name,
			description: req.body.description,
			image: imag,
			price: req.body.price,
			id_franchise: req.body.id_franchise,
			id_tag: req.body.id_tag,
			androide_del_mes: req.body.androide_del_mes,
			heroinas: req.body.heroinas,
			created_at: Date.now()
		})
		

		// req.body.category_id.forEach(async id_categoria => {
		// 	const category = await db.Category.findByPk(id_categoria)
		// 	let resultado = await Product.addCategory(category, { through: "products_category" });
		// 	res.send(resultado)
		// });

		// res.redirect('/')


		// let tablaProducts = await db.Product.findAll()
		// return res.send(tablaProducts)
		// .catch(error => res.send(error))
/* 		let nuevoProducto = req.body;
		nuevoProducto.id = products.length + 1;
		let imag;
		if(!req.file){
			imag = "default-placeholder.png"
		}else{
		imag = req.file.filename;
		}
		nuevoProducto.image = imag;
		products.push(nuevoProducto)
		let nuevoProductos = JSON.stringify(products, null, " ")
		fs.writeFileSync(productsFilePath, nuevoProductos)

		res.redirect('/') */

		res.redirect('/')
	},


	updateproducto: (req, res) => {

		db.Product.update({
			name: req.body.name,
			description: req.body.descripcion,
			price: req.body.precio,
			image: req.body.file,
			id_franchise: req.body.id_franchise,
			id_productsCategory: req.body.id_productsCategory,
			androide_del_mes: req.body.androide_del_mes,
			heroinas: req.body.heroinas,
			//tiene created_at, deberia ser timestamps TRUE?
			created_at: req.body.created_at,
		},
		{
			where: { id: req.params.id}
		})
		
		res.redirect('/')
	},

	delete: async (req, res) => {

			let productId = req.params.id;
			db.Product
			.destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
			.then(()=>{
				return res.redirect('/')})
			.catch(error => res.send(error)) 
		}


}

module.exports = productsController