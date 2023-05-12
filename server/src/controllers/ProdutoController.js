const { getAllProdutosService, getSearchProdutosService } = require('../services/ProdutosServices');

class ProdutosController {
    constructor(descricao, valor) {
        this.descricao = descricao
        this.valor = valor
    }

    static async getProdutos(req, res) {
        try {
            const produtos = await getAllProdutosService();
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
}

module.exports = ProdutosController;