/* eslint-disable no-undef */
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
