const { decodeBase64 } = require('bcryptjs');
const fs = require('fs')
const path = require('path');

const CategoryController = require('./Category.controller')

//para DB
const db = require('../database/models');

const Category = db.Category
const Product = db.Product

// CONTROLADOR

const productsController = {
	detail: (req,res) =>{
        let imagenLogeado = req.imagenLogeado

			db.Product.findByPk(req.params.id, 
				// {include: [{association: "franquicia-producto"},{association:"producto-categoria"}]}
			)
				.then(producto => {
					res.render('detail', {
						product: producto,
						user: req.session.userLogged,
						imagenLogeado
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
		let franquicias = await db.Franchise.findAll()
        let imagenLogeado = req.imagenLogeado


		res.render('administrator', {categorias, franquicias, productEdit: "", imagenLogeado})

    },

	//mas de un pedido asincronico, ojo
	editor: (req, res) => {
	
		let productEdit = db.Product.findByPk(req.params.id);
		let pedidoCategorias = db.Category.findAll();
		let franquicias =  db.Franchise.findAll()
        let imagenLogeado = req.imagenLogeado

		Promise.all([productEdit, pedidoCategorias, franquicias])
			.then(function([productEdit, categoria, franquicias]){
				res.render("administrator", { productEdit , categorias:categoria, franquicias, imagenLogeado })
			})
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
			created_at: Date.now(),
			// categorias:  req.body.category_id,

		})

		req.body.category_id.forEach(async category => {
			await CategoryController.addProduct(category, producto.name);
		});
		

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

		res.redirect('/', {imagenLogeado})
	},


	updateproducto: (req, res) => {

		db.Product.update({
			name: req.body.name,
			description: req.body.descripcion,
			price: req.body.precio,
			image: req.body.file,
			id_franchise: req.body.id_franchise,
			id_productsCategory: req.body.id_productsCategory,
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