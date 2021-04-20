const multer = require('multer')
const path = require('path')

let storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './public/Imagenes/Users');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

var uploadFile = multer({ storage: storage })

module.exports = uploadFile