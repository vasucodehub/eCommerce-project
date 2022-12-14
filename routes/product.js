const express = require('express')
const { createProduct,getProduct, deleteProduct, getOneProduct, updateProduct,filterProduct } = require('../controller/product')
const {productDataCheck,tokenVerify,isAdmin} = require('../middleware')
const routes = express.Router()

// routes for category
routes.post('/ecomm/api/v1/products',[productDataCheck,isAdmin],createProduct)

routes.get('/ecomm/api/v1/products',getProduct)

routes.get('/ecomm/api/v1/products/filter',filterProduct)

routes.delete('/ecomm/api/v1/products/:id',[isAdmin], deleteProduct)

routes.get('/ecomm/api/v1/products/:id',getOneProduct)

routes.put('/ecomm/api/v1/products/:id',[isAdmin],updateProduct)




// routes for product



module.exports = routes