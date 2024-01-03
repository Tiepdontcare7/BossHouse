const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getProducts);
router.put('/products/:id/toggle', productController.toggleProduct);

module.exports = router;