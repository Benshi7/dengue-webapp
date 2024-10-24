const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())

const PORT = process.env.PORT || 5000

const apiRoutes = require('./routes/api')
app.use('/api', apiRoutes)

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`)
})
