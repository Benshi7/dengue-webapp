const express = require('express')
const mysql = require('mysql2')
const router = express.Router()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'dengue_database'
})

router.get('/', (req, res) => {
  res.send('Saludando desde la api 😌')
})

router.get('/dengue', (req, res) => {
  const query = 'SELECT * FROM dengue_data WHERE id=5'

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err)
      return res.status(500).send('Error querying the database')
    }

    //
    res.json(results)
  })
})

module.exports = router
