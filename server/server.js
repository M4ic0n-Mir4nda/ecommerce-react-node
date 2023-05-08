const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const routes = require('./src/routes')

routes(app)

app.listen(port, () => {
    console.log(`Escutando em http://localhost:${port}`)
})