import { useEffect, useState } from 'react'
import axios from 'axios'

const Estimaciones = () => {
  const [casosPorProvincia, setCasosPorProvincia] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/dengue/estadisticas'
        )
        const transformedData = response?.data.casosPorProvincia.map(
          (item, index) => ({
            ...item,
            total_casos: parseInt(item.total_casos, 10),
            index: index + 1
          })
        )
        setCasosPorProvincia(transformedData)
      } catch (error) {
        console.error('Error al traer los datos:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Casos por provincia</h1>
      <ul>
        {' '}
        {casosPorProvincia?.map(item => (
          <li key={item.index}>
            {item.index}. {item.total_casos}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Estimaciones
