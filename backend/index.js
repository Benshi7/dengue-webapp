const express = require('express')
const cors = require('cors')
const helmet = require('helmet')


const app = express()

const swaggerUIPath= require("swagger-ui-express");
const swaggerjsonFilePath = require("./swagger.json");
app.use("/api-docs", swaggerUIPath.serve, swaggerUIPath.setup(swaggerjsonFilePath));

app.use(cors())
app.use(helmet())
app.use(express.json())

const PORT = process.env.PORT || 5000

const apiRoutes = require('./routes/api')
app.use('/', apiRoutes)

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`)
})

module.exports = app