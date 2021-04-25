const { decodeBase64 } = require('bcryptjs');
const fs = require('fs')
const path = require('path');

//para DB
const db = requiere ('../database/models')

// CONTROLADOR

const productsController = {
    productDetail:(req, res) => {
        res.render('productDetail')
    },

	detail: (req,res) =>{
		let product = products.find(product => product.id == req.params.id)
		res.render('detail', {product})
	},

    creador: (req, res) => {
        res.render('administrator')
    },

	editor: (req, res) => {
		let productEdit = products.find(product => product.id == req.params.id)
		res.render('product-edit', {productEdit})
	},
	
    guardado:  (req, res) => {
		db.Products.create({
			name:req.body.name,
			description:req.body.description,
			price:req.body.price,
			image:req.body.image,
			id_franchise:req.body.id_franchise,
			id_productsCategory:req.body.id_productsCategory,
			//tiene created_at, deberia ser timestamps TRUE?
			created_at:req.body.created_at,
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

		db.Products.update(
		{
			name:
		}, 
		{
			where:{id: }

		})
/* 		let productoARemplazar = products.find(product => product.id == req.params.id)
		let infoNueva = req.body;
		let imag;
		if(req.file != undefined){
			imag = req.file.filename;
		}else{
			imag = productoARemplazar.image
		}
		infoNueva.image = imag;
		infoNueva.id = req.params.id;

		let productsActualizados = products.map(product => {
			if (product.id == productoARemplazar.id) {
				return product = {...infoNueva};
			}
			return product;
		})

		productsActualizados = JSON.stringify(productsActualizados, null, ' ')
		fs.writeFileSync(productsFilePath, productsActualizados) */
		res.redirect('/')

	},

	delete: (req, res) => {
		db.Products.destroy({
			where:{id: }
		})
/* 		let productsActualizados = products.filter(aBorrar => aBorrar.id != req.params.id)
		productsActualizados = JSON.stringify(productsActualizados, null, ' ')
		fs.writeFileSync(productsFilePath, productsActualizados) */
		res.redirect('/')
	}


}

module.exports = productsController