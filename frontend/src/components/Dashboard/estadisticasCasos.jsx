/* eslint react/prop-types: 0 */

import { useEffect, useState } from 'react'

const EstadisticasCasos = ({ estadisticas }) => {
  const [total, setTotal] = useState(['', 1, 2])

  const {
    totalDengue,
    totalZika,
    casosPorRangoEtario,
    casosPorProvincia
    /* casosPorAnio */
  } = estadisticas || {}

  useEffect(() => {
    if (totalDengue && totalZika) {
      setTotal(
        parseInt(totalDengue?.[0]?.total_dengue || 0) +
          parseInt(totalZika?.[0]?.total_zika || 0)
      )
    } else if (totalDengue) {
      setTotal(parseInt(totalDengue?.[0]?.total_dengue || 0))
    } else if (totalZika) {
      setTotal(parseInt(totalZika?.[0]?.total_zika || 0))
    } else {
      setTotal('')
    }
  }, [totalDengue, totalZika])

  const promedioPorProvincia = (total / 24).toFixed(2)

  const indiceMaxRangoEtario =
    casosPorRangoEtario && casosPorRangoEtario.length > 0
      ? casosPorRangoEtario.reduce((maxIndex, current, index) => {
          return parseInt(current.total_casos) >
            parseInt(casosPorRangoEtario[maxIndex].total_casos)
            ? index
            : maxIndex
        }, 0)
      : null

  const indiceProvinciaConMasCasos = casosPorProvincia?.reduce(
    (maxIndex, current, index) => {
      return parseInt(current.total_casos) >
        parseInt(casosPorProvincia[maxIndex].total_casos)
        ? index
        : maxIndex
    },
    0
  )

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 my-6 max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mx-auto'>
      <div className='card bg-primary text-primary-content shadow-lg w-full h-auto'>
        <div className='card-body'>
          <h2 className='card-title mx-auto'>Casos Totales</h2>
          <p className='text-2xl font-bold'>
            {total !== '' ? total : 'Cargando...'}
          </p>
        </div>
      </div>

      <div className='card bg-secondary text-secondary-content shadow-lg w-full h-auto'>
        <div className='card-body'>
          <h2 className='card-title mx-auto'>Provincia más afectada</h2>
          <p className='text-2xl font-bold'>
            {casosPorProvincia !== undefined
              ? casosPorProvincia?.[indiceProvinciaConMasCasos]
                  ?.provincia_residencia
              : ''}
          </p>
        </div>
      </div>

      <div className='card bg-accent text-accent-content shadow-lg w-full h-auto'>
        <div className='card-body'>
          <h2 className='card-title mx-auto'>Rango Etario Más Afectado</h2>
          <p className='text-2xl font-bold'>
            {casosPorRangoEtario && casosPorRangoEtario.length > 0
              ? casosPorRangoEtario[indiceMaxRangoEtario].grupo_etario
              : 'Sin datos disponibles'}
          </p>
        </div>
      </div>

      <div className='card bg-info text-info-content shadow-lg w-full h-auto'>
        <div className='card-body'>
          <h2 className='card-title mx-auto'>Promedio por Provincia</h2>
          <p className='text-2xl font-bold'>{promedioPorProvincia}</p>
        </div>
      </div>
    </div>
  )
}

export default EstadisticasCasos
