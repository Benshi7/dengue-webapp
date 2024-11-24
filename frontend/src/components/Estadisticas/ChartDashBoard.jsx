import axios from 'axios'
import BarChartComponent from './BarChartComponent'
import GraficoPuntos from './GraficoPuntos'
import PieChartComponent from './PieChartComponent'
import SimpleAreaChart from './SimpleAreaChart'
import { useEffect, useState } from 'react'
import { Loader } from 'lucide-react'

const ChartDashBoard = () => {
  const [estadisticas, setEstadisticas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/dengue/estadisticas'
      )
      const estadisticas = response.data

      const parsedEstadisticas = {
        ...estadisticas,
        totalDengue: parseInt(estadisticas.totalDengue, 10) || 0,
        totalZika: parseInt(estadisticas.totalZika, 10) || 0,
        casosPorRangoEtario: estadisticas.casosPorRangoEtario?.map(caso => ({
          grupo_etario: caso.grupo_etario,
          total_casos: parseInt(caso.total_casos, 10) || 0
        })),
        casosPorProvincia: estadisticas.casosPorProvincia?.map(caso => ({
          provincia_residencia: caso.provincia_residencia,
          total_casos: parseInt(caso.total_casos, 10) || 0
        })),
        casosPorAnio: estadisticas.casosPorAnio?.map(caso => ({
          anio: caso.anio,
          total_casos: parseInt(caso.total_casos, 10) || 0
        }))
      }

      setEstadisticas(parsedEstadisticas)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {error ? (
        <div className='flex gap-4 mx-auto text-center justify-center mt-4 max-md:mt-4 max-sm:mt-2'>
          Error al traer los datos: <br />
          {error.message}
        </div>
      ) : null}
      {loading ? (
        <div className='flex gap-4 mx-auto text-center justify-center mt-4 max-md:mt-4 max-sm:mt-2'>
          Cargando...
        </div>
      ) : null}
      <div className='grid grid-cols-2 p-24 md:p-10 sm:p-2 lg:p-18 gap-4 mx-auto justify-center max-md:flex max-md:flex-col max-md:gap-6 max-md:justify-between max-md:items-center max-md:w-[90%]'>
        <div
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '8px',
            minWidth: '420px'
          }}
        >
          Total de casos por año
          <SimpleAreaChart casosPorAnio={estadisticas.casosPorAnio} />
        </div>
        <div
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '8px',
            minWidth: '420px'
          }}
        >
          Casos por grupo etario
          <PieChartComponent
            casosPorRangoEtario={estadisticas.casosPorRangoEtario}
          />
        </div>
        <div
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '8px',
            minWidth: '420px'
          }}
        >
          Total de casos por provincia
          <BarChartComponent
            casosPorProvincia={estadisticas.casosPorProvincia}
          />
        </div>
        <div
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '8px',
            minWidth: '420px'
          }}
        >
          Casos por provincia
          <GraficoPuntos casosPorProvincia={estadisticas.casosPorProvincia} />
        </div>
      </div>
    </>
  )
}

export default ChartDashBoard
