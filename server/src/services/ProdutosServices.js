const { Estoque } = require('../models')
const { Op } = require('sequelize')

async function getAllProdutosService(req) {
    try {
        const numberPages = req.query.page;
        const limitPages = req.query.limit;
        const produtos = await Estoque.findAll({
            attributes: ['ID', 'CODIGO', 'DESCRICAO', 'PRECOVENDA'],
            limit: parseInt(limitPages) + parseInt(numberPages)
        })
        return produtos;
    } catch (err) {
        return 'Não encontrado'
    }
}

async function getSearchProdutosService(req) {
    try {
        const researchedProducts = req.query.prod;
        const results = await Estoque.findAll({
            where: { 
                DESCRICAO: { 
                    [Op.like]: `%${researchedProducts}%` 
                }
            },
            attributes: ['ID', 'CODIGO', 'DESCRICAO', 'PRECOVENDA'],
            limit: 52
        })
        return results;
    } catch (err) {
        return 'Não encontrado', err
    }
}

module.exports = { getAllProdutosService, getSearchProdutosService }