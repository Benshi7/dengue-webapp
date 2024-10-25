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

// traer todos los casos
router.get('/dengue', (req, res) => {
  const query = 'SELECT * FROM dengue_data'

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res.status(500).send('Error buscando en la base de datos')
    }

    //
    res.json(results)
  })
})

// traer los casos con un id específico
router.get('/id/:id', (req, res) => {
  const query = 'SELECT * FROM dengue_data WHERE id=?'
  const id = req.params.id

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res.status(500).send('Error buscando en la base de datos')
    }

    //
    res.json(results)
  })
})

// seleccionar por departamento
router.get('/departamento/:departamento', (req, res) => {
  const query = 'SELECT * FROM dengue_data WHERE departamento_residencia=?'
  const departamento = req.params.departamento

  connection.query(query, [departamento], (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res.status(500).send('Error buscando en la base de datos')
    }

    //
    res.json(results)
  })
})

// seleccionar por id de provincia (entiendo que, desde el front, podremos hacer esto con un select que envia el ID en vez del texto)

router.get('/provincia/:provincia', (req, res) => {
  const query = 'SELECT * FROM dengue_data WHERE provincia_residencia_id=?'
  const provincia = req.params.provincia

  connection.query(query, [provincia], (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res.status(500).send('Error buscando en la base de datos')
    }

    //
    res.json(results)
  })
})

module.exports = router
