import { describe, it, expect } from 'vitest'

const obtenerIndiceMaxRangoEtario = casosPorRangoEtario => {
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

const casosIguales = [{ total_casos: '100' }, { total_casos: '100' }]

describe('obtenerIndiceMaxRangoEtario', () => {
  it('debería lanzar un error si hay números negativos', () => {
    const casos = [{ total_casos: '-10' }, { total_casos: '5' }]
    expect(() => obtenerIndiceMaxRangoEtario(casos)).toThrow(Error)
  })

  it('debería devolver null si no hay datos', () => {
    const resultado = obtenerIndiceMaxRangoEtario([])
    expect(resultado).toBeNull()
  })

  it('debería devolver 0 (primero) en caso de empate en total_casos', () => {
    const resultado = obtenerIndiceMaxRangoEtario(casosIguales)
    expect(resultado).toBe(0)
  })
})
