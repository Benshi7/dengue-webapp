const express = require('express')
const mysql = require('mysql2')
const router = express.Router()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'dengue_database'
})
router.get('/saludo', (_req, res) => {
  res.status(200).json({ message: 'Saludando desde la api 😌' })
  console.error('Error buscando en la base de datos:', err)
})

router.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' })
})

// traer todos los casos
router.get('/dengue', (_req, res) => {
  const query = `
    SELECT
      dengue_data.id,
      dengue_data.cantidad,
      departamento_residencia,
      provincia_residencia.nombre_provincia AS provincia_residencia,
      grupo_etario.nombre AS grupo_etario,
      tipo_evento.nombre_evento AS tipo_evento,
      anio.anio AS anio
    FROM dengue_data
    JOIN provincia_residencia ON dengue_data.provincia_residencia_id = provincia_residencia.id
    JOIN grupo_etario ON dengue_data.grupo_etario_id = grupo_etario.id
    JOIN tipo_evento ON dengue_data.tipo_evento_id = tipo_evento.id
    JOIN anio ON dengue_data.anio_id = anio.id
  `

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res.status(500).send('Error buscando en la base de datos')
    }
    res.json(results)
  })
})

// traer los casos con un id específico
router.get('/dengue/id/:id', (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido: debe ser un número.' })
  }

  const query = `
      SELECT
        dengue_data.id,
        dengue_data.cantidad,
        departamento_residencia,
        provincia_residencia.nombre_provincia AS provincia_residencia,
        grupo_etario.nombre AS grupo_etario,
        tipo_evento.nombre_evento AS tipo_evento,
        anio.anio AS anio
      FROM dengue_data
      JOIN provincia_residencia ON dengue_data.provincia_residencia_id = provincia_residencia.id
      JOIN grupo_etario ON dengue_data.grupo_etario_id = grupo_etario.id
      JOIN tipo_evento ON dengue_data.tipo_evento_id = tipo_evento.id
      JOIN anio ON dengue_data.anio_id = anio.id
      WHERE dengue_data.id = ?
    `

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res
        .status(500)
        .json({ error: 'Error interno al buscar en la base de datos.' })
    }

    // Feedback por si el id no existe en la base o fue borrado.
    if (results.length === 0) {
      return res
        .status(404)
        .json({ error: 'No se encontró un caso de dengue con ese ID.' })
    }

    res.json(results[0]) // Asumimos que el id es único, porque debería.
  })
})

// seleccionar por departamento
router.get('/dengue/departamento/:departamento', (req, res) => {
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

router.get('/dengue/provincias', (_req, res) => {
  const query = `
    SELECT * FROM provincia_residencia
  `

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res.status(500).send('Error buscando en la base de datos')
    }
    res.json(results)
  })
})

router.get('/dengue/grupo_etario', (_req, res) => {
  const query = `
    SELECT * FROM grupo_etario
  `

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res.status(500).send('Error buscando en la base de datos')
    }
    res.json(results)
  })
})

router.get('/dengue/anio', (_req, res) => {
  const query = `
    SELECT * FROM anio
  `

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res.status(500).send('Error buscando en la base de datos')
    }
    res.json(results)
  })
})

// seleccionar por id de provincia (entiendo que, desde el front, podremos hacer esto con un select que envia el ID en vez del texto)

router.get('/dengue/provincia/:provincia', (req, res) => {
  const query = 'SELECT * FROM dengue_data WHERE provincia_residencia_id=?'
  const provincia = req.params.provincia

  connection.query(query, [provincia], (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res.status(500).send('Error buscando en la base de datos')
    }

    res.json(results)
  })
})

// casos totales por provincia (por id)
router.get('/dengue/casos_totales/:provinciaId', (req, res) => {
  const provinciaId = req.params.provinciaId
  const query =
    'SELECT SUM(cantidad) AS total_casos FROM dengue_data WHERE provincia_residencia_id = ?'

  connection.query(query, [provinciaId], (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res.status(500).send('Error buscando en la base de datos')
    }

    res.json({ total_casos: results[0].total_casos })
  })
})

//POST agrega un nuevo año al listado
router.post('/dengue/agregar/:anio', (req, res) => {
  const query = 'INSERT INTO anio SET ?'
  const agregoAnio = {
    anio: req.params.anio
  }
  connection.query(query, agregoAnio, error => {
    if (error) throw error
    res.send('Se incluyo un nuevo año')
  })
})

//POST ingresa un nuevo caso
router.post(
  '/:departamento_residencia/:provincia_residencia_id/:grupo_etario_id/:cantidad/:tipo_evento_id/:anio_id/',
  (req, res) => {
    const query = 'INSERT INTO dengue_data SET ?'
    const agregoContagio = {
      departamento_residencia: req.params.departamento_residencia,
      provincia_residencia_id: req.params.provincia_residencia_id,
      grupo_etario_id: req.params.grupo_etario_id,
      cantidad: req.params.cantidad,
      tipo_evento_id: req.params.tipo_evento_id,
      anio_id: req.params.anio_id
    }
    connection.query(query, agregoContagio, error => {
      if (error) throw error
      res.json('Se agrega un nuevo registro de contagio')
    })
  }
)

// PUT actualiza un registro de dengue_data
router.patch('/dengue/actualizar/:id', (req, res) => {
  const id = req.params.id
  const actualizoContagio = { ...req.body }

  if (Object.keys(actualizoContagio).length === 0) {
    return res.status(400).send('No se proporcionaron datos para actualizar')
  }

  const query = 'UPDATE dengue_data SET ? WHERE id = ?'

  connection.query(query, [actualizoContagio, id], (error, _results) => {
    if (error) {
      console.error('Error actualizando el registro:', error)
      return res.status(500).send('Error actualizando el registro')
    }

    res.send('Se actualizó un registro de contagio')
  })
})

//DELETE borra por id casos de la DDBB
router.delete('/dengue/eliminar/:id/', (req, res) => {
  const borroRegistro = req.params.id
  const query = 'DELETE FROM dengue_data WHERE id=?'
  connection.query(query, [borroRegistro], error => {
    if (error) throw error
    res.send('Se borra registro de la Base de Datos')
  })
})

// Sumatoria de los casos totales en todo el país
router.get('/dengue/casos_totales', (_req, res) => {
  const query = 'SELECT SUM(cantidad) AS total_casos FROM dengue_data'

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res.status(500).send('Error buscando en la base de datos')
    }

    res.json({ total_casos: results[0].total_casos })
  })
})

// casos totales por provincia (por id)
router.get('/dengue/casos_totales/:provinciaId', (req, res) => {
  const provinciaId = req.params.provinciaId
  const query =
    'SELECT SUM(cantidad) AS total_casos FROM dengue_data WHERE provincia_residencia_id = ?'

  connection.query(query, [provinciaId], (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res.status(500).send('Error buscando en la base de datos')
    }

    res.json({ total_casos: results[0].total_casos })
  })
})

// este endpoint calcula las estadísticas de los casos de dengue y zika, juntos
/* router.get('/dengue/estadisticas', async (_req, res) => {
  try {
    const queries = {
      totalDengue: `
        SELECT SUM(cantidad) AS total_dengue 
        FROM dengue_data 
        JOIN tipo_evento ON dengue_data.tipo_evento_id = tipo_evento.id
        WHERE tipo_evento.nombre_evento = 'Dengue'
      `,
      totalZika: `
        SELECT SUM(cantidad) AS total_zika 
        FROM dengue_data 
        JOIN tipo_evento ON dengue_data.tipo_evento_id = tipo_evento.id
        WHERE tipo_evento.nombre_evento = 'Enfermedad por Virus del Zika'
      `,
      casosPorRangoEtario: `
        SELECT grupo_etario.nombre AS grupo_etario, SUM(dengue_data.cantidad) AS total_casos
        FROM dengue_data
        JOIN grupo_etario ON dengue_data.grupo_etario_id = grupo_etario.id
        GROUP BY grupo_etario.id
      `,
      casosPorProvincia: `
        SELECT provincia_residencia.nombre_provincia AS provincia_residencia, SUM(dengue_data.cantidad) AS total_casos
        FROM dengue_data
        JOIN provincia_residencia ON dengue_data.provincia_residencia_id = provincia_residencia.id
        GROUP BY provincia_residencia.id
      `,
      casosPorAnio: `
      SELECT anio, SUM(dengue_data.cantidad) AS total_casos
      FROM dengue_data
      JOIN anio ON dengue_data.anio_id = anio.id
      GROUP BY anio.id, anio.anio
    `
    }

    const resultados = {}
    let queriesPendientes = Object.keys(queries).length

    for (const [clave, consulta] of Object.entries(queries)) {
      connection.query(consulta, (err, results) => {
        if (err) {
          console.error(`Error ejecutando la consulta para ${clave}:`, err)
          return res.status(500).send('Error calculando estadísticas')
        }

        resultados[clave] = results

        queriesPendientes -= 1
        if (queriesPendientes === 0) {
          res.json(resultados)
        }
      })
    }
  } catch (error) {
    console.error('Error general al calcular estadísticas:', error)
    res.status(500).send('Error interno en el servidor')
  }
}) */ router.get('/dengue/estadisticas', async (req, res) => {
  try {
    const {
      provincia_residencia_id,
      grupo_etario_id,
      tipo_evento_id,
      anio_id
    } = req.query

    let filtro = 'WHERE 1=1' // Siempre verdadero para concatenar con el AND y filtrar
    const valores = []

    if (provincia_residencia_id) {
      filtro += ` AND provincia_residencia_id = ?`
      valores.push(provincia_residencia_id)
    }
    if (grupo_etario_id) {
      filtro += ` AND grupo_etario_id = ?`
      valores.push(grupo_etario_id)
    }
    if (tipo_evento_id) {
      filtro += ` AND tipo_evento_id = ?`
      valores.push(tipo_evento_id)
    }
    if (anio_id) {
      filtro += ` AND anio_id = ?`
      valores.push(anio_id)
    }

    const queries = {
      totalDengue: `
        SELECT SUM(cantidad) AS total_dengue 
        FROM dengue_data
        ${filtro} AND tipo_evento_id = (SELECT id FROM tipo_evento WHERE nombre_evento = 'Dengue')
      `,
      totalZika: `
        SELECT SUM(cantidad) AS total_zika 
        FROM dengue_data
        ${filtro} AND tipo_evento_id = (SELECT id FROM tipo_evento WHERE nombre_evento = 'Enfermedad por Virus del Zika')
      `,

      casosPorRangoEtario: `
      SELECT grupo_etario.nombre AS grupo_etario, SUM(dengue_data.cantidad) AS total_casos
      FROM dengue_data
      JOIN grupo_etario ON dengue_data.grupo_etario_id = grupo_etario.id
      ${filtro}
      GROUP BY grupo_etario.id
    `,

      casosPorProvincia: `
        SELECT provincia_residencia.nombre_provincia AS provincia_residencia, SUM(dengue_data.cantidad) AS total_casos
        FROM dengue_data
        JOIN provincia_residencia ON dengue_data.provincia_residencia_id = provincia_residencia.id
        ${filtro}
        GROUP BY provincia_residencia.id
      `,

      casosPorAnio: `
        SELECT anio_id AS anio, SUM(cantidad) AS total_casos
        FROM dengue_data
        ${filtro}
        GROUP BY anio_id
      `
    }

    const resultados = {}
    let queriesPendientes = Object.keys(queries).length

    for (const [clave, consulta] of Object.entries(queries)) {
      connection.query(consulta, valores, (err, results) => {
        if (err) {
          console.error(`Error ejecutando la consulta para ${clave}:`, err)
          return res.status(500).send('Error calculando estadísticas')
        }

        resultados[clave] = results

        queriesPendientes -= 1
        if (queriesPendientes === 0) {
          res.json(resultados)
        }
      })
    }
  } catch (error) {
    console.error('Error general al calcular estadísticas:', error)
    res.status(500).send('Error interno en el servidor')
  }
})

// este endpoint es igual que el de arriba pero le podés mandar evento_id por si necesitaras separarlo
router.get('/dengue/estadisticas/:evento_id', async (req, res) => {
  try {
    const { evento_id } = req.params
    if (isNaN(evento_id)) {
      return res.status(400).send('El ID del evento debe ser un número válido')
    }

    const queries = {
      totalCasos: `
        SELECT SUM(cantidad) AS total_casos
        FROM dengue_data
        WHERE tipo_evento_id = ?
      `,
      casosPorRangoEtario: `
        SELECT grupo_etario.nombre AS grupo_etario, SUM(dengue_data.cantidad) AS total_casos
        FROM dengue_data
        JOIN grupo_etario ON dengue_data.grupo_etario_id = grupo_etario.id
        WHERE dengue_data.tipo_evento_id = ?
        GROUP BY grupo_etario.id
      `,
      casosPorProvincia: `
        SELECT provincia_residencia.nombre_provincia AS provincia_residencia, SUM(dengue_data.cantidad) AS total_casos
        FROM dengue_data
        JOIN provincia_residencia ON dengue_data.provincia_residencia_id = provincia_residencia.id
        WHERE dengue_data.tipo_evento_id = ?
        GROUP BY provincia_residencia.id
      `,
      casosPorAnio: `
        SELECT anio.anio AS anio, SUM(dengue_data.cantidad) AS total_casos
        FROM dengue_data
        JOIN anio ON dengue_data.anio_id = anio.id
        WHERE dengue_data.tipo_evento_id = ?
        GROUP BY anio.id, anio.anio
      `
    }

    const resultados = {}
    let queriesPendientes = Object.keys(queries).length

    for (const [clave, consulta] of Object.entries(queries)) {
      connection.query(consulta, [evento_id], (err, results) => {
        if (err) {
          console.error(`Error ejecutando la consulta para ${clave}:`, err)
          return res.status(500).send('Error calculando estadísticas')
        }

        resultados[clave] = results

        queriesPendientes -= 1
        if (queriesPendientes === 0) {
          res.json(resultados)
        }
      })
    }
  } catch (error) {
    console.error('Error general al calcular estadísticas específicas:', error)
    res.status(500).send('Error interno en el servidor')
  }
})

router.get('/dengue/casos-por-anio', (req, res) => {
  const query = `
    SELECT anio.anio AS anio, SUM(dengue_data.cantidad) AS total_casos
    FROM dengue_data
    JOIN anio ON dengue_data.anio_id = anio.id
    GROUP BY anio.anio
    ORDER BY anio.anio
  `

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error buscando en la base de datos:', err)
      return res.status(500).send('Error calculando casos por año')
    }

    // Devuelve los resultados sin el reduce
    res.json(results)
  })
})

router.get('/dengue/estadisticasProvincia/:provinciaId', async (req, res) => {
  const { provinciaId } = req.params

  // Validación del parámetro
  if (isNaN(provinciaId)) {
    return res
      .status(400)
      .json({ error: 'El ID de la provincia debe ser un número válido.' })
  }

  try {
    const queries = {
      totalCasosProvincia: `
        SELECT SUM(cantidad) AS total_casos
        FROM dengue_data
        WHERE provincia_residencia_id = ?
      `,
      casosPorRangoEtario: `
        SELECT grupo_etario.nombre AS grupo_etario, SUM(dengue_data.cantidad) AS total_casos
        FROM dengue_data
        JOIN grupo_etario ON dengue_data.grupo_etario_id = grupo_etario.id
        WHERE provincia_residencia_id = ?
        GROUP BY grupo_etario.id
      `,
      casosPorAnio: `
        SELECT anio.anio AS anio, SUM(dengue_data.cantidad) AS total_casos
        FROM dengue_data
        JOIN anio ON dengue_data.anio_id = anio.id
        WHERE provincia_residencia_id = ?
        GROUP BY anio.id, anio.anio
      `
    }

    const resultados = {}
    let queriesPendientes = Object.keys(queries).length

    for (const [clave, consulta] of Object.entries(queries)) {
      connection.query(consulta, [provinciaId], (err, results) => {
        if (err) {
          console.error(`Error ejecutando la consulta para ${clave}:`, err)
          return res
            .status(500)
            .send('Error calculando estadísticas por provincia')
        }

        resultados[clave] = results

        queriesPendientes -= 1
        if (queriesPendientes === 0) {
          res.json(resultados)
        }
      })
    }
  } catch (error) {
    console.error(
      'Error general al calcular estadísticas por provincia:',
      error
    )
    res.status(500).send('Error interno en el servidor')
  }
})

module.exports = router
