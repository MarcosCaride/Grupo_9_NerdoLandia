const fs = require('fs')
const path = require('path');

const productsFilePath =  path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))

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
		let nuevoProducto = req.body;
		nuevoProducto.id = products.length + 1;
		let imag;
		if(!req.file ){
			imag = "default-placeholder.png"
		}else{
		imag = req.file.filename;
		}
		nuevoProducto.image = imag;
		products.push(nuevoProducto)
		let nuevoProductos = JSON.stringify(products, null, " ")
		fs.writeFileSync(productsFilePath, nuevoProductos)

		res.redirect('/')
	},


	updateproducto: (req, res) => {

		let productoARemplazar = products.find(product => product.id == req.params.id)
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
		fs.writeFileSync(productsFilePath, productsActualizados)
		res.redirect('/')

	},

	delete: (req, res) => {
		let productsActualizados = products.filter(aBorrar => aBorrar.id != req.params.id)
		productsActualizados = JSON.stringify(productsActualizados, null, ' ')
		fs.writeFileSync(productsFilePath, productsActualizados)
		res.redirect('/')
	}


}

module.exports = productsController