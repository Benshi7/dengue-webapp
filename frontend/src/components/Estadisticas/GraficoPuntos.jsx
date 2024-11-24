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
import PropTypes from 'prop-types'

const GraficoPuntos = ({ casosPorProvincia }) => {
  const [datosTransformados, setDatosTransformados] = useState([])

  useEffect(() => {
    const transformedData = casosPorProvincia?.map((item, index) => ({
      ...item,
      total_casos: parseInt(item.total_casos),
      index: index + 1
    }))
    setDatosTransformados(transformedData)
  }, [casosPorProvincia])
  /*
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>
  }
 */
  return (
    <div className=' w-full h-[90%] max-md:w-[90%] mx-auto max-md:h-[400px] items-center'>
      <ResponsiveContainer
        width='100%'
        height={window.innerWidth < 400 ? 200 : 400}
      >
        <ScatterChart
          width={700}
          height={400}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid />
          <XAxis
            dataKey='index'
            name='Provincia'
            tickFormatter={index =>
              datosTransformados?.find(d => d.index === index)
                ?.provincia_residencia || ''
            }
            domain={[1, datosTransformados?.length]}
          />
          <YAxis dataKey='total_casos' name='Casos de Dengue' />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter
            name='Casos por Provincia'
            data={datosTransformados}
            fill='#FF3864'
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GraficoPuntos

GraficoPuntos.propTypes = {
  casosPorProvincia: PropTypes.arrayOf(
    PropTypes.shape({
      provincia_residencia: PropTypes.string.isRequired,
      total_casos: PropTypes.number.isRequired
    })
  )
}
