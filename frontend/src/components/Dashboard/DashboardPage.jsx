import { useState, useEffect } from 'react'
import Filtros from './filtros'
import EstadisticasCasos from './estadisticasCasos'
import ResultadosTabla from './resultadosTabla'
import axios from 'axios'

const DashboardPage = () => {
  const [filtros, setFiltros] = useState({
    provincia: '',
    rangoEtario: '',
    tipoEvento: '',
    anio: ''
  })
  const [datos, setDatos] = useState([])
  const [estadisticas, setEstadisticas] = useState({
    casosTotales: 0,
    provinciasAfectadas: 0,
    rangoEtarioAfectado: '',
    promedioPorProvincia: 0
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams()
        if (filtros.provincia)
          params.append('provincia_residencia_id', filtros.provincia)
        if (filtros.rangoEtario)
          params.append('grupo_etario_id', filtros.rangoEtario)
        if (filtros.tipoEvento)
          params.append('tipo_evento_id', filtros.tipoEvento)
        if (filtros.anio) params.append('anio_id', filtros.anio)

        const responseStats = await axios.get(
          `http://localhost:5000/api/dengue/estadisticas?${params.toString()}`
        )
        setEstadisticas(responseStats.data)

        const responseCasos = await axios.get(
          `http://localhost:5000/api/dengue/provincia/${filtros.provincia}}`
        )
        setDatos(responseCasos.data)
      } catch (error) {
        console.error('Error al traer los datos:', error)
      }
    }

    fetchData()
  }, [filtros])

  return (
    <div className='justify-center mx-auto mt-6 max-w-[75%]'>
      <Filtros setFiltros={setFiltros} />
      <EstadisticasCasos estadisticas={estadisticas} />
      <ResultadosTabla datos={datos} />
    </div>
  )
}

export default DashboardPage
