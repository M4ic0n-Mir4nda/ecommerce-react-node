const express = require('express');
const cors = require('cors');
const produtosRoutes = require('./produtosRoutes')
const departamentosRoutes = require('./departmentsRoutes');

const routes = app => {
    app.use(express.json())
    app.use(cors({origin: "*"}))
    //app.use('/produtos', produtosRoutes)
    //app.use('/departamentos', departamentosRoutes)
    app.use(produtosRoutes)
    //app.use(departamentosRoutes)
}
module.exports = routes;