const { decodeBase64 } = require('bcryptjs');
const fs = require('fs')
const path = require('path');

//para DB
const db = require('../database/models')

// CONTROLADOR

const productsController = {
	detail: (req,res) =>{
			db.Product.findByPk(req.params.id, 
				// {include: [{association: "franquicia-producto"},{association:"producto-categoria"}]}
			)
				.then(producto => {
					res.render('detail', {
						product: producto,
						user: req.session.userLogged
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

		res.render('administrator', {categorias, franquicias, productEdit: ""})

    },

	//mas de un pedido asincronico, ojo
	editor: (req, res) => {
	
		let pedidoProducto = db.Product.findByPk(req.params.id)
		let pedidoCategorias = db.Product.findAll();
		let pedidoFranchise = db.Product.findAll();

		Promise.all([pedidoProducto, pedidoCategorias,pedidoFranchise])
			.then(function([producto, categoria, franchise]){
				res.render("product-edit", {producto:producto, categoria:categoria, franchise:franchise})
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
		await db.Product.create({
			name: req.body.name,
			description: req.body.description,
			image: imag,
			price: req.body.price,
			id_franchise: req.body.id_franchise,
			id_productsCategory: req.body.id_productsCategory,
			//tiene created_at, deberia ser timestamps TRUE?
			created_at: Date.now(),
		})
		let tablaProducts = await db.Product.findAll()
		res.send(tablaProducts);
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