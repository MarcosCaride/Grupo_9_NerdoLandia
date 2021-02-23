const express = require('express')
const router = express.Router();
const path = require('path');
const productsController =require ('../controllers/productsController')

router.get('/', productsController.productDetail);
router.get('/administrador', productsController.editor)



module.exports = router