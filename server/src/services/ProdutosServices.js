const database = require('../models')

async function getAllProdutosService() {
    try {
        const produtos = await database.Produtos.findAll();
        return produtos;
    } catch (err) {
        return 'Não encontrado'
    }
}

module.exports = { getAllProdutosService }