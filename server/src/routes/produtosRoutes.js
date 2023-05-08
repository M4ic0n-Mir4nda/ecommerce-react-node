const { Router } = require('express')
const ProdutosController = require('../controllers/ProdutoController')
const router = Router()

router
    .get('/', ProdutosController.getProdutos)

module.exports = router;
