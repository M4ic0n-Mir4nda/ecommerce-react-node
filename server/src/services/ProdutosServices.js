const { Estoque } = require('../models');
const { Op } = require('sequelize');

async function getAllProdutosService(req) {
    try {
        const numberPages = req.query.page;
        const limitPages = req.query.limit;
        const produtos = await Estoque.findAll({
            attributes: ['ID', 'CODIGO', 'DESCRICAO', 'PRECOVENDA'],
            limit: parseInt(numberPages) * parseInt(limitPages)
        })
        return produtos;
    } catch (err) {
        return 'Não encontrado', err
    }
}

async function getSearchProdutosService(req) {
    try {
        const numberPages = req.query.page;
        const limitPages = req.query.limit;
        const researchedProducts = req.query.prod;
        const results = await Estoque.findAll({
            where: { 
                DESCRICAO: { 
                    [Op.like]: `%${researchedProducts}%` 
                }
            },
            attributes: ['ID', 'CODIGO', 'DESCRICAO', 'PRECOVENDA'],
            limit: parseInt(numberPages) * parseInt(limitPages)
        })
        return results;
    } catch (err) {
        return 'Não encontrado', err
    }
}

async function searchForProductsDepartmentServices(req) {
    try {
        const numDepartamento = req.query.depart;
        const produtosPorDepartamento = await Estoque.findAll({
            where: {
                DEPTO: parseInt(numDepartamento),
            },
            attributes: ['CODIGO', 'DESCRICAO', 'DEPTO', 'PRECOVENDA'],
            limit: 32,
        })
        return produtosPorDepartamento;
    } catch (err) {
        return 'Não encontrado', err;
    }
}

module.exports = { getAllProdutosService, getSearchProdutosService, searchForProductsDepartmentServices };