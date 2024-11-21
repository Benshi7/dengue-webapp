import { useState, useEffect } from 'react'
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import axios from 'axios'

const GraficoPuntos = () => {
  const [datosTransformados, setDatosTransformados] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/dengue/estadisticas'
      )
      const casosPorProvincia = response.data.casosPorProvincia

      const transformedData = casosPorProvincia.map((item, index) => ({
        ...item,
        total_casos: parseInt(item.total_casos),
        index: index + 1
      }))

      setDatosTransformados(transformedData)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>
  }

  return (
    <div className='w-[90%] h-[90%] min-w-[400px] min-h-[400px] mx-auto'>
      <ResponsiveContainer className=' min-w-[90%] min-h-[90%]'>
        <ScatterChart
          width={800}
          height={400}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid />
          <XAxis
            dataKey='index'
            name='Provincia'
            tickFormatter={index =>
              datosTransformados.find(d => d.index === index)
                ?.provincia_residencia || ''
            }
            domain={[1, datosTransformados.length]}
          />
          <YAxis dataKey='total_casos' name='Casos de Dengue' />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter
            name='Casos por Provincia'
            data={datosTransformados}
            fill='#8884d8'
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GraficoPuntos
