const { Router } = require('express')
const ProdutosController = require('../controllers/ProdutoController')
const router = Router()

router
    .get('/', ProdutosController.getProdutos)
    .post('/teste', ProdutosController.testAPI)
    .post('/produtos/departamentos', ProdutosController.searchForProductsDepartment)
    .post('/', ProdutosController.getSearchProdutos)

module.exports = router;
