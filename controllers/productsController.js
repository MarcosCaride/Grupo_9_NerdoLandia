const fs = require('fs')
const path = require('path');

const productsFilePath =  path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
    productDetail:(req, res) => {
        res.render('productDetail')
    },

    editor: (req, res) => {
        res.render('administrator')
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
	}

}

module.exports = productsController