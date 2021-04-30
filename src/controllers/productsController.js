const { decodeBase64 } = require('bcryptjs');
const fs = require('fs')
const path = require('path');

//para DB
const db = require('../database/models')

// CONTROLADOR

const productsController = {
    productDetail:(req, res) => {
        res.render('productDetail')
	},
	

	//se muetra el detall de un producto por id, o sea, /detail/:id
	detail: (req,res) =>{
			db.Product.findByPk(req.params.id, {
				include: [{association: "franquicia-producto"},{association:"producto-categoria"}]
			})
				.then(producto => {
					res.render('detail', {producto:producto});
				});
/* 			include: [{association: "franquicia-producto"},{association:"producto-categoria"}]
		}
			.then(function (producto) {
				res.render("detail", {producto:producto})
			}) */
	},

	//solamente se muestra el formulario, GET
    creador: (req, res) => {
        res.render('administrator')
    },

	//mas de un pedido asincronico, ojo
	editor: (req, res) => {
	
		let pedidoProducto = db.Product.findByPk(req.params.id)

		let pedidoCategorias = db.Product.findAll();

		let pedidoFranchise = db.Product.findAll();

		let pedidoPivotProductsCategory= db.ProductsCategory.findAll();

		Promise.all([pedidoProducto, pedidoCategorias,pedidoFranchise, pedidoPivotProductsCategory])
			.then(function([producto, categoria, franchise, pivot]){
				res.render("product-edit", {producto:producto, categoria:categoria, franchise:franchise, pivot:pivot})
			})
	},
	
	//se guarda lo del form, POST
    guardado:  (req, res) => {
		db.Product.create({
			name: req.body.name,
			description: req.body.descripcion,
			price: req.body.precio,
			image: req.body.file,
			id_franchise: req.body.id_franchise,
			id_productsCategory: req.body.id_productsCategory,
			//tiene created_at, deberia ser timestamps TRUE?
			created_at: req.body.created_at,
		})
		res.redirect('/');
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

	delete: (req, res) => {
		//db.Products.destroy({
			//where:{id: }
		//})
/* 		let productsActualizados = products.filter(aBorrar => aBorrar.id != req.params.id)
		productsActualizados = JSON.stringify(productsActualizados, null, ' ')
		fs.writeFileSync(productsFilePath, productsActualizados) */
		res.redirect('/')
	}


}

module.exports = productsController