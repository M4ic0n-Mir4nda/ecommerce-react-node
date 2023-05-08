const express = require('express');
const cors = require('cors');
const produtosRoutes = require('./produtosRoutes')

const routes = app => {
    app.use(express.json())
    app.use(cors({origin: "*"}))
    app.use('/produtos', produtosRoutes)
}
module.exports = routes;