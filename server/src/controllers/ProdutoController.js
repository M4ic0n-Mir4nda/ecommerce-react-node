const { 
    getAllProdutosService, 
    getSearchProdutosService, 
    searchForProductsDepartmentServices,
} 
= require('../services/ProdutosServices');

class ProdutosController {
    constructor(descricao, valor) {
        this.descricao = descricao
        this.valor = valor
    }

    static async getProdutos(req, res) {
        try {
            const produtos = await getAllProdutosService(req);
            return res.status(200).json(produtos);
        } catch (err) {
            return res.status(500).send('ocorreu um erro', err);
        }
    }

    static async getSearchProdutos(req, res) {
        try {
            const produto = await getSearchProdutosService(req);
            return res.status(200).json(produto)
        } catch (err) {
            return res.status(500).send('ocorreu um erro', err);
        }
    }

    static async searchForProductsDepartment(req, res) {
        try {
            const produtosDepartamento = await searchForProductsDepartmentServices(req);
            return res.status(200).json(produtosDepartamento);
        } catch (err) {
            return res.status(500).send('ocorreu um erro', err);
        }
    }

    static async testAPI(req, res) {
        try {
            const api = req.body
            res.status(200).json(api)
        } catch (err) {
            res.status(500).json({Erro: `${err}`})
        }
    }
}

module.exports = ProdutosController;