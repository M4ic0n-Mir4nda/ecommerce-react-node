const { Deptos } = require('../models')
const { Op } = require('sequelize')

async function getAllDepartmentsServices() {
    try {
        const departamentos = await Deptos.findAll({
            where: {
                SECAO: 0, GRUPO: 0, SUBGR: 0, DESCRICAO: {
                    [Op.not]: null
                },
            },
            attributes: ['DEPTO', 'DESCRICAO']
        });
        return departamentos;
    } catch (err) {
        return 'Não encontrado', err
    }
}

module.exports = { getAllDepartmentsServices }