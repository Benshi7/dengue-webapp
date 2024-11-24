import { useState, useEffect } from 'react'
import { CircleCheck } from 'lucide-react'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
const Filtros = ({ setFiltros }) => {
  const [provincia, setProvincia] = useState('')
  const [rangoEtario, setRangoEtario] = useState('')
  const [tipoEvento, setTipoEvento] = useState('')
  const [anio, setAnio] = useState('')

  // Opciones cargadas dinámicamente
  const [provincias, setProvincias] = useState([])
  const [rangosEtarios, setRangosEtarios] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [tiposEvento, setTiposEvento] = useState(['', 'Dengue', 'Zika'])
  const [anios, setAnios] = useState([])

  useEffect(() => {
    // Carga de datos iniciales para los selectores
    const fetchData = async () => {
      try {
        const provinciasRes = await axios.get(
          'http://localhost:5000/api/dengue/provincias'
        )
        const rangosRes = await axios.get(
          'http://localhost:5000/api/dengue/grupo_etario'
        )
        const aniosRes = await axios.get(
          'http://localhost:5000/api/dengue/anio'
        )

        setProvincias(provinciasRes.data)
        setRangosEtarios(rangosRes.data)
        setAnios(aniosRes.data)
      } catch (error) {
        console.error('Error al obtener los datos:', error)
      }
    }
    fetchData()
  }, [])

  const handleApplyFilters = () => {
    setFiltros({
      provincia,
      rangoEtario,
      tipoEvento,
      anio
    })
  }
  return (
    <div className='flex flex-col lg:flex-row items-center gap-4 mb-6 justify-center'>
      <div className='w-3/4 lg:w-auto'>
        <select
          value={provincia}
          onChange={e => setProvincia(e.target.value)}
          className='select select-bordered w-3/4 lg:w-auto'
        >
          <option value=''>Todas las provincias</option>
          {provincias.map(prov => (
            <option key={prov.id} value={prov.id}>
              {prov.nombre_provincia}
            </option>
          ))}
        </select>
      </div>

      <div className='w-3/4 lg:w-auto'>
        <select
          value={rangoEtario}
          onChange={e => setRangoEtario(e.target.value)}
          className='select select-bordered w-3/4 lg:w-auto'
        >
          <option value=''>Todos los rangos</option>
          {rangosEtarios.map(rango => (
            <option key={rango.id} value={rango.id}>
              {rango.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className='w-3/4 lg:w-auto'>
        <select
          value={tipoEvento}
          onChange={e => setTipoEvento(e.target.value)}
          className='select select-bordered w-3/4 lg:w-auto'
        >
          <option value=''>Todos los eventos</option>
          <option value='1'>Dengue</option>
          <option value='2'>Zika</option>
        </select>
      </div>

      <div className='w-3/4 lg:w-auto'>
        <select
          value={anio}
          onChange={e => setAnio(e.target.value)}
          className='select select-bordered w-3/4 lg:w-auto'
        >
          <option value=''>Todos los años</option>
          {anios.map(anio => (
            <option key={anio.id} value={anio.id}>
              {anio.anio}
            </option>
          ))}
        </select>
      </div>

      <button
        className='btn btn-primary w-1/3 lg:w-auto'
        onClick={handleApplyFilters}
      >
        Aplicar
        <CircleCheck className='w-5' />
      </button>
    </div>
  )
}

export default Filtros
