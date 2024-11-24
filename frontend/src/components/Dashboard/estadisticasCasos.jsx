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
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mx-auto'>
      {[
        {
          bgColor: 'bg-primary text-primary-content',
          title: 'Casos Totales',
          content: total !== '' ? total : 'Cargando...'
        },
        {
          bgColor: 'bg-secondary text-secondary-content',
          title: 'Provincia más afectada',
          content:
            casosPorProvincia?.[indiceProvinciaConMasCasos]
              ?.provincia_residencia || 'Sin datos'
        },
        {
          bgColor: 'bg-accent text-accent-content',
          title: 'Rango Etario Más Afectado',
          content:
            casosPorRangoEtario?.length > 0
              ? casosPorRangoEtario[indiceMaxRangoEtario]?.grupo_etario
              : 'Sin datos disponibles'
        },
        {
          bgColor: 'bg-info text-info-content',
          title: 'Promedio por Provincia',
          content: promedioPorProvincia || 'Sin datos'
        }
      ].map(({ bgColor, title, content }, index) => (
        <div
          key={index}
          className={`card ${bgColor} shadow-lg w-full h-auto flex items-center`}
        >
          <div className='card-body'>
            <h2 className='card-title text-center'>{title}</h2>
            <p className='text-2xl font-bold text-center'>{content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EstadisticasCasos
