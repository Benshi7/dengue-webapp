const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Saludando desde la api 😌')
})

module.exports = router
