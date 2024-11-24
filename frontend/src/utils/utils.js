let casosPorProvincia = []
export const transformedData = casosPorProvincia.map((item, index) => ({
  ...item,
  total_casos: parseInt(item.total_casos),
  index: index + 1
}))

export const obtenerIndiceMaxRangoEtario = casosPorRangoEtario => {
  if (!casosPorRangoEtario || casosPorRangoEtario.length === 0) {
    return null
  }
  return casosPorRangoEtario.reduce((maxIndex, current, index) => {
    return parseInt(current.total_casos) >
      parseInt(casosPorRangoEtario[maxIndex].total_casos)
      ? index
      : maxIndex
  }, 0)
}

export function calcularPromedioCasosPorProvincia (casosPorProvincia) {
  if (!casosPorProvincia || casosPorProvincia.length === 0) {
    return null
  }

  const provinciasConCasos = casosPorProvincia.filter(
    provincia => parseInt(provincia.total_casos) > 0
  )

  if (provinciasConCasos.length === 0) {
    return 0
  }

  const totalCasos = provinciasConCasos.reduce(
    (suma, provincia) => suma + parseInt(provincia.total_casos),
    0
  )

  const promedio = totalCasos / provinciasConCasos.length
  return promedio.toFixed(2)
}
